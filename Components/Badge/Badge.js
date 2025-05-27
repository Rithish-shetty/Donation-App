import React from 'react';
import { Text , View } from 'react-native';
import PropTypes from 'prop-types';
import { style } from './style';

export const Badge = (props) => {
    return (
        <View style={style.buttonwidth}>
            <View style={[style.badge]}>
                <Text style={[style.text]} >{props.text}</Text>
            </View>
        </View>
    );
};

Badge.propTypes = {
    text : PropTypes.string.isRequired,
};
