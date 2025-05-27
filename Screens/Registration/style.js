import { StyleSheet } from 'react-native';
import { scaleFont, scaleHorizontle, scaleVerticle } from '../../Components/Scaling/Scaling';
import { getFontFamily } from '../../Assets/fonts/helper';

export const style = StyleSheet.create({
    scroll : {
        padding : scaleHorizontle(24),
        flex : 1,
        justifyContent : 'center',
    },
    pressable : {
        alignItems : 'center',
    },
    error : {
        fontFamily : getFontFamily('Inter' , '400'),
        fontSize : scaleFont(16),
        color : '#FF0000',
        marginBottom : scaleVerticle(24),
    },
    success : {
        fontFamily : getFontFamily('Inter' , '400'),
        fontSize : scaleFont(16),
        color : '#00FF00',
        marginBottom : scaleVerticle(24),
    },
});
