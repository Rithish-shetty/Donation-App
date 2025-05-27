import { StyleSheet } from 'react-native';
import { scaleFont, scaleVerticle } from '../../Components/Scaling/Scaling';
import { getFontFamily } from '../../Assets/fonts/helper';

export const style = StyleSheet.create({
    container : {
        alignItems : 'center',
        // height : '100%',
    },
    text : {
        fontSize : scaleFont(15),
        fontFamily : getFontFamily('Inter' , '600'),
        padding : scaleVerticle(20),
    },
});
