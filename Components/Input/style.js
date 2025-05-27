import { StyleSheet } from 'react-native';
import { scaleFont, scaleVerticle } from '../Scaling/Scaling';
import { getFontFamily } from '../../Assets/fonts/helper';

export const style = StyleSheet.create({
    Input : {
        borderBottomWidth : 1,
        borderColor : 'rgba(167,167,167,0.5)',
        paddingVertical : scaleVerticle(10),
        fontSize : scaleFont(15),
        fontFamily : getFontFamily('Inter' , '400'),
        color : '000000',
        // backgroundColor : '#e0f0ff',
    },
    text : {
        color : 'rgb(109, 106, 106)',
        fontSize : scaleFont(15),
    },
});
