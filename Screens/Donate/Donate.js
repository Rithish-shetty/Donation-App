import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native';
import { style } from './style';
import { globalStyle } from '../../Assets/Style/globalStyle';
import BackButton from '../../Components/BackButton/BackButton';
import Name from '../../Components/Name/Name';

const Donate = ({navigation}) => {
const num = Math.floor(Math.random() * 10);
let msg;
console.log(num);

switch(num) {
    case 1:
        msg = 'We accept donations... just not yet. Even our wallet is shy.';
        break;
    case 2:
        msg = 'Donation methods coming soon! Currently accepting good vibes only.';
        break;
    case 3:
        msg = "We'd love your money, but our code said 'not today'.";
        break;
    case 4:
        msg = "Oops! The donate button ran away, We're chasing it down. ";
        break;
    case 5:
        msg = 'Our donation system is still in training. Please be patient.';
        break;
    case 6:
        msg = 'Still setting our money magnet. Stay tuned!';
        break;
    case 7:
        msg = "Donations? We're working on it... our app is still learning the value of money. ";
        break;
    default:
        msg = 'No donation options yet. But you throw cash at your screen and hope for the best.';
        break;
}

    return (
        <SafeAreaView style={[globalStyle.flex , globalStyle.backgroundWhite]}>
            <BackButton onPress = {()=> navigation.goBack()} />
        <View style = {[style.container]}>
            <Text style={style.text}>{msg}</Text>
        </View>
        <Name />
        </SafeAreaView>
    );
};

export default Donate;
