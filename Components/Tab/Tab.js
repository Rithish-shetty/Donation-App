import React from 'react';
import { Pressable , Text , View } from 'react-native';
import PropTypes from 'prop-types';
import { style } from './style';

export const Tab = (props) => {
    return (
        <View style={style.buttonwidth}>
        <Pressable style={[style.button , props.isInactive && style.inactive]}
        // disabled = {props.isInactive}
        onPress={() => props.onPress(props.tabId)}
        >
            <Text style={[style.text , props.isInactive && style.inactiveText]} >{props.text}</Text>
        </Pressable>
        </View>
    );
};

Tab.defaultProps = {
    isInactive : false,
    onPress : () => {},
};

Tab.propTypes = {
    tabId : PropTypes.number.isRecquired,
    text : PropTypes.string,
    isInactive : PropTypes.bool,
    onPress : PropTypes.func,
};
