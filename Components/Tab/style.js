import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../Assets/fonts/helper';
import { scaleFont, scaleHorizontle, scaleVerticle } from '../Scaling/Scaling';

export const style = StyleSheet.create({
    button : {
        padding : scaleHorizontle(5),
        backgroundColor : '#495FFF',
        borderRadius : scaleHorizontle(30),
        justifyContent : 'center',
        height : scaleVerticle(45),
    },
    text : {
        fontSize : scaleFont(13),
        color : 'white',
        textAlign : 'center',
        fontFamily : getFontFamily('Inter' , '400'),
        lineHeight : scaleFont(19),
    },
    inactive : {
        backgroundColor : '#DBDFFA',
    },
    inactiveText : {
        color : 'black',
    },
    buttonwidth : {
        width : scaleHorizontle(130),
    },
});
