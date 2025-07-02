import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    user: null,
    status: false
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.status = true
        },
        logout: (state) => {
            state.user = null
            state.status = false
        }
    }
})

export const { login, logout } = AuthSlice.actions
export default AuthSlice.reducer