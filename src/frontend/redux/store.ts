import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import notificationSlice from "./features/notificationSlice";
import { userApi } from "./services/userApi";


export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer, 
        auth: authSlice,
        notification: notificationSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;