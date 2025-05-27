import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import {persistReducer , persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import User from './Reducers/User';
import Categories from './Reducers/categories';
import Donation from './Reducers/Donation';

const configuration = {
    key : 'root',
    storage : AsyncStorage,
    version : 1,
};

const rootReducer = combineReducers({
    user : User,
    categories : Categories,
    donation : Donation,
});

const persistedReducer = persistReducer(configuration , rootReducer);

const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleWare) => {
        return getDefaultMiddleWare().concat(logger);
    },
});

export default store;

export const persist = persistStore(store);

