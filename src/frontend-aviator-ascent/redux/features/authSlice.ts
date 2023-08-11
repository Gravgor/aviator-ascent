import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    token: string | null;
    username: string | null;
    email: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    username: null,
    email: null,
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.username = null;
            state.email = null;
            state.isAuthenticated = false;
        }
    }
})

export const { setToken, setUsername, setEmail, setIsAuthenticated, logout } = authSlice.actions;   
export default authSlice.reducer;