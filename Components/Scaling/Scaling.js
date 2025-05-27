import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width , height } = Dimensions.get('window');

const isSmall = width <= 350 && !DeviceInfo.hasNotch();

const guidlineBaseWidth = () => {
    if(isSmall)
    {
        return 330;
    }
    return 350;
};

export const scaleHorizontle = (size) => (width / guidlineBaseWidth()) * size;

const guidlineBaseHeight = () => {
    if(isSmall){
        return 550;
    }
    else if(width > 410){
        return 620;
    }
    return 680;
};

export const scaleVerticle = (size) => (height / guidlineBaseHeight()) * size;

const guidlineBaseFont = () => {
    if(width > 410){
        return 430;
    }
    return 400;
};

export const scaleFont = (size) => Math.round(width / guidlineBaseFont()) * size;
