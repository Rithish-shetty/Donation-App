import React from 'react';
import { Text , View } from 'react-native';
import { style } from './style';
import PropTypes from 'prop-types';


export const Header = (props) => {

    const styleToApply = () => {
        switch(props.type){
            case 1:
                return style.title1;
            case 2:
                return style.title2;
            case 3:
                return style.title3;
            default:
                return style.title1;
        }
    };

    return (
        <View>
            <Text style={[styleToApply() , {color : props.color}]} numberOfLines={props.numberOfLines}>{props.title}</Text>
        </View>
    );
};

Header.defaultProps = {
    title : '',
    type : 1,
};

Header.propTypes = {
    title : PropTypes.string,
    type : PropTypes.number,
    color : PropTypes.string,
};
