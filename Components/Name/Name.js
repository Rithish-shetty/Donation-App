import React from 'react';
import { style } from './style';
import { View } from 'react-native';
import { Text } from 'react-native';

const Name = () => {
    return (
    <View style={style.nameContainer}>
        <Text style={style.name}>If it crashes , its a feature. Trust me - Rithish</Text>
    </View>
    );
};


export default Name;
