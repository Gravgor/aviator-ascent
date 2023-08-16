import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    token: string | null;
    username: string | null;
    email: string | null;
    isAuthenticated: boolean;
    userInfo: object;
    userFlights: object;
}

const initialState: AuthState = {
    token: null,
    username: null,
    email: null,
    isAuthenticated: false,
    userInfo: {},
    userFlights: {},
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{token: string, username: string, email: string, userInfo: object, userFlights: object}>) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.isAuthenticated = true;
            state.userInfo = action.payload.userInfo;
            state.userFlights = action.payload.userFlights;
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