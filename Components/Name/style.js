import { StyleSheet } from 'react-native';
import { scaleFont, scaleHorizontle } from '../Scaling/Scaling';
import { getFontFamily } from '../../Assets/fonts/helper';

export const style = StyleSheet.create({
    nameContainer : {
        backgroundColor : 'rgb(240, 230, 230)',
        alignItems : 'center',
        height : scaleHorizontle(30),
        justifyContent : 'center',
        position : 'absolute',
        bottom : 0,
        width : '100%',
        // borderBottomWidth : 1,
        // borderBottomColor : 'black',
    },
    name : {
        fontSize : scaleFont(12),
        fontFamily : getFontFamily('Inter' , '800'),
    },
});
