import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView } from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import { globalStyle } from '../../Assets/Style/globalStyle';
import { Image , View } from 'react-native';
import { style } from './style';
import { Badge } from '../../Components/Badge/Badge';
import { Header } from '../../Components/Header/Header';
import { Text } from 'react-native-gesture-handler';
import { Button } from '../../Components/Button/Button';
import { getColor } from '../../Assets/fonts/backGround';
import Donate from '../Donate/Donate';

const SingleDonationItem = ({navigation}) => {
    const donationItemInformation = useSelector(state => state.donation.selectedItemInformation);
    const category = useSelector(state => state.categories);
    // console.log('donation info', donationItemInformation);
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite , globalStyle.flex ,  {backgroundColor : getColor(donationItemInformation.donationItemId)}]}>
            <ScrollView style={style.scroll}>
                <BackButton onPress = {()=>navigation.goBack()} />
                <Image style={style.image} source={{uri:donationItemInformation.image}} />
                <View style={style.badge}>
                    <Badge text={category.categories.find((value)=>donationItemInformation.categoryIds.includes(value.categoryId))?.name || 'Unknown'} />
                </View>
                <View style={style.Header}>
                <Header title={donationItemInformation.name} type={1}/>
                </View>
                <Text style={style.text}>{donationItemInformation.description}</Text>
            </ScrollView>
            <View style={style.button}>
                <Button text = {'Donate'} onPress={()=>{navigation.navigate(Donate);}} />
            </View>
        </SafeAreaView>
    );
};

export default SingleDonationItem;
