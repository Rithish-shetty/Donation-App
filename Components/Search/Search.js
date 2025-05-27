import React, { useState } from 'react';
import { style } from './style';
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

export const Search = (props) => {
    const [search , setSearch] = useState('');

    const Searching = (value) => {
        setSearch(value);
        props.Go(value);
    };

    return (
        <Pressable style={style.textInputContainer}>
            <FontAwesomeIcon icon={faSearch} color="#9A93F0" size={20} />
            <TextInput style={style.textInput}
            Value={search}
            onChangeText={(value) => Searching(value)
            }
            />
        </Pressable>
    );
};

Search.defaultProps = {
    Go : () => {},
};

Search.propTypes = {
    Go : PropTypes.func,
};
