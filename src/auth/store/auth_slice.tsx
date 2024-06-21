// store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
    isLoggedIn: boolean;
}

const initialState: IAuthState = {
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoginState(state, action) {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setLoginState } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
