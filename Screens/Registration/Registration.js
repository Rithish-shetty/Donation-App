import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { style } from './style';
import { globalStyle } from '../../Assets/Style/globalStyle';
import { Header } from '../../Components/Header/Header';
import { Button } from '../../Components/Button/Button';
import BackButton from '../../Components/BackButton/BackButton';
import { createUser } from '../../api/user';

const Registration = ({navigation}) => {

const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [fullName , setFullName] = useState('');
const [error , setError] = useState('');
const [success , setSuccess] = useState('');




    return (
        <SafeAreaView style={[globalStyle.backgroundWhite , globalStyle.flex , style.mainContainer]}>
            <BackButton onPress={() => navigation.goBack()} />
            <ScrollView contentContainerStyle={style.scroll}>
                <View style={globalStyle.marginBottom24}>
                    <Header title={'Hello and Welcome ❤️'} type={1} />
                </View>
                <View style={globalStyle.marginBottom24}>
                <Input
                keyboardType = {'default'}
                style={style.input}
                label={'First & Last Name'}
                onChangeText={ value => setFullName(value)}
                placeHolder = {'Enter Your Name....'}
                />
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
                {success.length > 0 && <Text style={style.success}>{success}</Text>}
                <View style={globalStyle.marginBottom24}>
                    <Button isDisabled = {fullName.length <= 3 || email.length <= 5 || password.length <= 8}
                    text={'Register'} onPress={async ()=> {
                       let user =  await createUser(fullName, email, password);
                       if(user.error){
                        setError(user.error);
                       }
                       else{
                        setError('');
                        setSuccess('Registered successfully');
                        setTimeout(() => navigation.goBack() , 3000);
                       }
                    }}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Registration;
