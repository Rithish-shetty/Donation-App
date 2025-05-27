import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loggedIn : false,
    userId : 1,
};

const User = createSlice({
    name : 'user',
    initialState : initialState,
    reducers :
    {
        setToInitialState : () => {
    return initialState;
    },
    logIn : (state , action) => {
        return{...state , ...{loggedIn : true}, ...action.payload};
    },
    updateToken : (state , action) => {
        return (state.token = action.payload);
    },
    },
});

export const {logIn , setToInitialState , updateToken} = User.actions;

export default User.reducer;

