import { StyleSheet } from 'react-native';
import { scaleHorizontle, scaleVerticle } from '../Scaling/Scaling';

export const style = StyleSheet.create({
    image : {
        height : scaleVerticle(150),
        width : scaleHorizontle(135),
        borderRadius : scaleHorizontle(20),
    },
    badge : {
        position : 'absolute',
        zIndex : 1,
        paddingTop : scaleVerticle(10),
        paddingLeft : scaleHorizontle(10),
    },
    header : {
        marginTop : scaleVerticle(10),
        width : scaleHorizontle(120),
        marginBottom : scaleVerticle(10),
    },
    price : {
        marginTop : scaleVerticle(3),
    },
});
