import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../Routes/routes';
import Home from '../../Screens/Home/Home';
import SingleDonationItem from '../../Screens/SingleDonationItem/SingleDonationItem';
import Login from '../../Screens/Login/Login';
import Registration from '../../Screens/Registration/Registration';
import Donate from '../../Screens/Donate/Donate';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.Login} screenOptions={{headerShown : false}}>
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.Registration} component={Registration} />
        </Stack.Navigator>
    );
};

export const Authenticated = () => {
    return (
         <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{headerShown : false}}>
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem} />
            <Stack.Screen name={Routes.Donate} component={Donate} />
        </Stack.Navigator>
    );
};
