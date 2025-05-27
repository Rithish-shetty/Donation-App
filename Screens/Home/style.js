import { StyleSheet } from 'react-native';
import { scaleFont, scaleHorizontle, scaleVerticle } from '../../Components/Scaling/Scaling';
import { getFontFamily } from '../../Assets/fonts/helper';

export const style = StyleSheet.create( {
text : {
    // color : 'white',
},
donation : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    margin : scaleHorizontle(10),
},
image : {
    height : scaleVerticle(48),
    width : scaleHorizontle(48),
    resizeMode : 'contain',
    borderRadius : scaleHorizontle(10),
},
headerContainer : {
    marginVertical : scaleVerticle(22),
    marginHorizontal : scaleHorizontle(20),
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
},
hello : {
    fontSize : scaleFont(18),
    fontFamily : getFontFamily('Inter' , '400'),
    color : '#9FB0AA',
},
search : {
    marginHorizontal : scaleHorizontle(15),
},
poster : {
    height : scaleVerticle(180),
    width : '100%',
    resizeMode : 'contain',
},
posterContainer : {
    marginHorizontal : scaleHorizontle(20),
},
catContainer : {
    marginLeft : scaleHorizontle(20),
},
catText : {
    fontSize : scaleFont(18),
    fontFamily : getFontFamily('Inter' , '700'),
},
catTextContainer : {
    marginLeft : scaleHorizontle(24),
    marginBottom : scaleVerticle(12),
},
donationItemContainer : {
    marginTop : scaleVerticle(20),
    marginHorizontal : scaleHorizontle(20),
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent : 'space-evenly',
},
});
