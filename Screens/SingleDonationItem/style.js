import { StyleSheet } from 'react-native';
import { scaleFont, scaleHorizontle, scaleVerticle } from '../../Components/Scaling/Scaling';
import { getFontFamily } from '../../Assets/fonts/helper';

export const style = StyleSheet.create({
    image : {
        height : scaleVerticle(200),
        width : scaleHorizontle(300),
        margin : scaleHorizontle(24),
        borderRadius : scaleHorizontle(20),
    },
    badge : {
        marginLeft : scaleHorizontle(24),
    },
    Header : {
        marginLeft : scaleHorizontle(24),
        marginTop : scaleVerticle(10),
    },
    text : {
        marginLeft : scaleHorizontle(28),
        marginTop : scaleVerticle(10),
        fontSize : scaleFont(16),
        fontFamily : getFontFamily('Inter' , '400'),
        height : '100%',
    },
    button : {
        position : 'absolute',
        width : scaleHorizontle(300),
        bottom : scaleVerticle(15),
        margin : scaleHorizontle(24),
    },
    scroll : {},
});
