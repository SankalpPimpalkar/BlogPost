import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/auth.slice"

const store = configureStore({
    reducer: {
        // Reducer goes here
        auth: AuthReducer,
    }
})

export default store;