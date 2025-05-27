import React from 'react-native';
import { Pressable , Text } from 'react-native';
import PropTypes from 'prop-types';
import { style } from './style';

export const Button = (props) => {
    return (
        <Pressable style={[style.button , props.isDisabled && style.disabled]}
        disabled = {props.isDisabled}
        onPress={props.onPress}
        >
            <Text style={style.text}>{props.text}</Text>
        </Pressable>
    );
};

Button.defaultProps = {
    isDisabled : false,
    onPress : () => {},
};

Button.propType = {
    text : PropTypes.string,
    isDisabled : PropTypes.bool,
    onPress : PropTypes.func,
};
