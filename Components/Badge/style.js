import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../Assets/fonts/helper';
import { scaleFont, scaleHorizontle, scaleVerticle } from '../Scaling/Scaling';

export const style = StyleSheet.create({
    badge : {
        backgroundColor : '#145855',
        borderRadius : scaleHorizontle(50),
        justifyContent : 'center',
        height : scaleVerticle(22),
    },
    text : {
        fontSize : scaleFont(10),
        color : 'white',
        textAlign : 'center',
        fontFamily : getFontFamily('Inter' , '500'),
        lineHeight : scaleFont(12),
    },
    buttonwidth : {
        width : scaleHorizontle(90),
    },
});
