import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    token: string | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    email: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    username: null,
    firstname: null,
    lastname: null,
    email: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{token: string, username: string, email: string, firstname: string, lastname: string}>) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.email = action.payload.email;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = null;
            state.username = null;
            state.email = null;
            state.isAuthenticated = false;
        }
    }
})

export const { setUser, logout } = authSlice.actions;   
export default authSlice.reducer;