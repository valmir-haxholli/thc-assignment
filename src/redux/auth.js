import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.token = action.payload.token;
        }
    }
})

const { loginSuccess } = auth.actions;

export const login = ({ email, password }) => async dispatch => {
    const res = await axios.post('https://thc-ui-api.thrivecoin.com/v1/users/sign_in', {
        sign_in: {
            email,
            password
        }
    });
    dispatch(loginSuccess(res.data))
}

export default auth.reducer;