import { StyleSheet } from 'react-native';
import { scaleHorizontle, scaleVerticle } from '../Scaling/Scaling';
import { getFontFamily } from '../../Assets/fonts/helper';

export const style = StyleSheet.create({
    textInputContainer : {
        backgroundColor : '#f1f1f1',
        alignContent : 'space-between',
        flexDirection : 'row',
        paddingHorizontal : scaleHorizontle(12),
        alignItems : 'center',
        borderRadius : scaleHorizontle(20),
        height : scaleVerticle(45),
        borderWidth : 2,
        borderColor : '#cccccc',
    },
    textInput : {
        flex : 1,
        marginLeft : scaleHorizontle(8),
        fontFamily : getFontFamily('Inter' , '500'),
        color : '#333333',
        },
});
