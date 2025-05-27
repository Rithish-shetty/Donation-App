import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../Assets/fonts/helper';
import { scaleFont, scaleHorizontle, scaleVerticle } from '../Scaling/Scaling';

export const style = StyleSheet.create({
    button : {
        backgroundColor : '#007BFF',
        borderRadius : scaleHorizontle(30),
        justifyContent : 'center',
        height : scaleVerticle(50),
    },
    text : {
        fontSize : scaleFont(19),
        color : 'white',
        textAlign : 'center',
        fontFamily : getFontFamily('Inter' , 500),
        lineHeight : scaleFont(29),
    },
    disabled : {
        opacity : 0.5,
    },
});
