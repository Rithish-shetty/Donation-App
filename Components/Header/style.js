import { StyleSheet } from 'react-native';
import { scaleFont } from '../Scaling/Scaling';
import { getFontFamily } from '../../Assets/fonts/helper';

export const style = StyleSheet.create({
    title1 : {
        fontSize : scaleFont(25),
        fontFamily : getFontFamily('Inter','600'),
        lineHeight : scaleFont(29),
    },
    title2 : {
        fontSize : scaleFont(20),
        fontFamily : getFontFamily('Inter','600'),
        lineHeight : scaleFont(24),
    },
    title3 : {
        fontSize : scaleFont(15),
        fontFamily : getFontFamily('Inter','600'),
        lineHeight : scaleFont(21),
    },
});
