"use client"

import { useEffect, useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

type NotificationProps = {
  message: string;
  type: 'error' | 'success';
  setNotificationVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Notification({ message, type, setNotificationVisible }: NotificationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setNotificationVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [setNotificationVisible]);

  const icon = type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />;

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 rounded-md shadow-md ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white transform ${visible ? 'translate-y-0 opacity-100 transition-all duration-500 ease-in-out' : 'translate-y-full opacity-0'
        }`}
    >
      <div className="flex items-center">
        <span className="mr-2">{icon}</span>
        <span>{message}</span>
      </div>
    </div>
  );
}
