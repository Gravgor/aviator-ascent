import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    token: string | null;
    email: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    email: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{token: string, email: string}>) => {
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = null;
            state.email = null;
            state.isAuthenticated = false;
        }
    }
})

export const { setUser, logout } = authSlice.actions;   
export default authSlice.reducer;