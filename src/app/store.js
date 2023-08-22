import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store