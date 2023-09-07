import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../../services/login/user";
import { getAccessTokenFromLocalStorage, setAccesTokenStorage } from "../../../services/localstorage";
import Cookies from 'js-cookie';

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const response = await loginUser(user);
        console.log("response",response)
         setAccesTokenStorage(response.data)
         Cookies.set('jwt', response.data.token, { expires: 7 });

        return response.data
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
const initialState = {
    user: getAccessTokenFromLocalStorage('accessToken') ? getAccessTokenFromLocalStorage('accessToken') : null,
    isError: false,
    message: '',
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: () => {
            console.log("pennding");
        },
        [login.fulfilled]: (state, { payload }) => {
            return { ...state, user: payload };
        },
        [login.rejected]: () => {
            console.log("rejected");
        }
    }
})
export default authSlice.reducer;