import { StyleSheet } from 'react-native';
import { scaleVerticle } from '../../Components/Scaling/Scaling';

export const globalStyle = StyleSheet.create({
    backgroundWhite:{
        backgroundColor : 'white',
    },
    flex : {
        flex : 1,
    },
    marginBottom24 : {
        marginBottom : scaleVerticle(24),
    },
});
