"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removeNotification } from '@/redux/features/notificationSlice';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { useEffect, useCallback } from 'react';

export default function NotificationContainer() {
    const dispatch = useAppDispatch();
    const { notifications } = useAppSelector(state => state.notification);

    const handleRemoveNotification = useCallback(
        (id: number) => {
            dispatch(removeNotification({
                id
            }));
        },
        [dispatch]
    );

    useEffect(() => {
        const timeoutIds: NodeJS.Timeout[] = [];
        notifications.forEach(notification => {
            const timeoutId = setTimeout(() => {
                handleRemoveNotification(notification.id);
            }, 5000);
            timeoutIds.push(timeoutId);
        });

        return () => {
            timeoutIds.forEach(id => clearTimeout(id));
        };
    }, [notifications, handleRemoveNotification]);

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={`p-2 rounded-md shadow-md ${
                        notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                    } text-white transform translate-y-0 opacity-100 transition-transform duration-500 ease-in-out slide-in`}
                >
                    <div className="flex items-center">
                        <span className="mr-2">{notification.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}</span>
                        <span>{notification.message}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}



