import { StyleSheet } from 'react-native';
import { scaleHorizontle, scaleVerticle } from '../Scaling/Scaling';

export const style = StyleSheet.create({
    buttonContainer : {
        backgroundColor : '#FAFAFA',
        height : scaleVerticle(30),
        width : scaleHorizontle(30),
        marginTop : scaleVerticle(20),
        marginLeft : scaleHorizontle(24),
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 100,
    },
});
