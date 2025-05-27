import React from 'react';
import { style } from './style';
import PropTypes from 'prop-types';
import { Badge } from '../Badge/Badge';
import { Image, Pressable, View } from 'react-native';
import { Header } from '../Header/Header';

const SingleDonation = (props) => {
    return (
        <Pressable onPress={props.onPress}>
        <View>
            <View style={style.badge}>
                <Badge text={props.badgeTitle} />
            </View>
            <Image resizeMode="cover" source={{uri:props.image}} style={style.image} />
            <View style={style.header}>
                <Header title={props.donationTitle} type={3} numberOfLines = {1} />
                <View style={style.price}>
                    <Header title = {props.price} color={props.textColor} type={3} />
                </View>
            </View>
        </View>
        </Pressable>
    );
};

SingleDonation.propTypes = {
    badgeTitle : PropTypes.string.isRequired,
    donationTitle : PropTypes.string.isRequired,
    price : PropTypes.string.isRequired,
};

export default SingleDonation;

