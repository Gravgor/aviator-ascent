import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import notificationSlice from "./features/notificationSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        notification: notificationSlice,
    }
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;