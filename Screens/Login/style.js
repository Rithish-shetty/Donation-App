import { StyleSheet } from 'react-native';
import { scaleHorizontle } from '../../Components/Scaling/Scaling';
import { getFontFamily } from '../../Assets/fonts/helper';
import { scaleFont } from '../../Components/Scaling/Scaling';
import { scaleVerticle } from '../../Components/Scaling/Scaling';

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
});
