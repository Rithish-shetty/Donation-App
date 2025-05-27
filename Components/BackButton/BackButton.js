import React from 'react';
import { style } from './style';
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const BackButton = (props) => {
    return (
        <Pressable style={style.buttonContainer} onPress={()=> props.onPress()} >
            <FontAwesomeIcon icon={faArrowLeft} size={18} />
        </Pressable>
    );
};

BackButton.PropTypes = {
    onPress : PropTypes.func.isRequired,
};

export default BackButton;
