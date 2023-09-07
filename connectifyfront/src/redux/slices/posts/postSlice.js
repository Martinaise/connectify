import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getposts = createAsyncThunk('posts/get', async (thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:5001/api/post/");
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
    posts: [],
    isError: false,
    message: '',
}
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [getposts.pending]: () => {
            console.log("pennding");
        },
        [getposts.fulfilled]: (state, { payload }) => {
            return { ...state, posts: payload };
        },
        [getposts.rejected]: () => {
            console.log("rejected");
        }
    }
})
export default postsSlice.reducer;