import {createSlice, PayloadAction} from '@reduxjs/toolkit';

let nextNotificationId = 0;

type NotificationState = {
    id: number;
    message: string | null;
    type: string | null;
}

const initialState = {
    notifications: [] as NotificationState[],
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.notifications.push({
                id: nextNotificationId++,
                message: action.payload.message,
                type: action.payload.type,
            });
        },
        removeNotification: (state, action) => {
            const idToRemove = action.payload.id;
            state.notifications = state.notifications.filter(notification => notification.id !== idToRemove);

        }
    }
})

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;