import React from 'react';
import { useSelector } from 'react-redux';
import { Authenticated, NonAuthenticated } from './MainNavigation';

export const RootNavigation = () =>{
    const user = useSelector(state => state.user);
    return user.loggedIn ? <Authenticated /> : <NonAuthenticated />;
};
