import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth/authSlice";
import  postsSlice  from "../slices/posts/postSlice";


export const store=configureStore({
    reducer:{
        auth:authSlice,
        pos: postsSlice,
    },
})