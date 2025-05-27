import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import { Pressable, SafeAreaView, ScrollView, View , Text } from 'react-native';
import { style } from './style';
import { globalStyle } from '../../Assets/Style/globalStyle';
import { Header } from '../../Components/Header/Header';
import { Button } from '../../Components/Button/Button';
import { Routes } from '../../Navigation/Routes/routes';
import { loginUser } from '../../api/user';
import { logIn } from '../../Redux/Reducers/User';
import { useDispatch } from 'react-redux';

const Login = ({navigation}) => {

const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [error , setError] = useState('');

const dispatch = useDispatch();

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite , globalStyle.flex , style.mainContainer]}>
            <ScrollView contentContainerStyle={style.scroll}>
                <View style={globalStyle.marginBottom24}>
                    <Header title={'Welcome Back'} type={1} />
                </View>
                <View style={globalStyle.marginBottom24}>
                <Input
                keyboardType = {'email-address'}
                style={style.input}
                label={'Email'}
                onChangeText={ value => setEmail(value)}
                placeHolder = {'Enter Your Email....'}
                />
                </View>
                <View style={globalStyle.marginBottom24}>
                <Input
                keyboardType = {'default'}
                style={style.input}
                label={'Password'}
                onChangeText={ value => setPassword(value)}
                placeHolder = {'******'}
                />
                </View>
                {error.length > 0 && <Text style={style.error}>{error}</Text>}
                <View style={globalStyle.marginBottom24}>
                    <Button text={'Login'} isDisabled={email.length < 5 || password.length < 8}
                    onPress = {async () => { let userLog = await loginUser(email , password);
                        if(!userLog.status){
                            setError(userLog.error);
                        }
                        else{
                            setError('');
                            dispatch(logIn(userLog.data));
                            setTimeout(()=> navigation.navigate(Routes.Home),3000);
                        }
                    }}
                    />
                </View>
                <Pressable style={style.pressable} onPress={() => navigation.navigate(Routes.Registration)}>
                    <Header title={"Don't have an account?"} type={3} color={'blue'}/>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;
