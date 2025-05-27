import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { style } from './style';

const Input = (props) => {

const [value , setValue] = useState('');

    return (
        <View>
            <Text style={style.text}>{props.label}</Text>
            <TextInput style={style.Input}
                value={value}
                onChangeText={(val)=> {setValue(val);
                    props.onChangeText(val);
                }}
                placeholder={props.placeHolder}
                keyboardType={props.keyboardType}
                secureTextEntry = {props.secureTextEntry}
            />
        </View>
    );
};

Input.defaultProp = {
    onChangeText : {},
    placeHolder : 'Enter',
};

Input.propTypes = {
    secureTextEntry : PropTypes.bool,
    keyboardType : PropTypes.string,
    placeHolder : PropTypes.string,
    label : PropTypes.string.isRequired,
    onChangeText : PropTypes.func,
};

export default Input;
