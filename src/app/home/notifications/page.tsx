import React from 'react';


import NotificationCard from '@/components/notification/NotificationCard';
import DeleteButton from '@/components/notification/DeleteButton';

export default function NotificationsPage() {
  // Sample data for notifications
  const notifications = [
    { id: 1, user: "hola", message: "holapedro" },
    { id: 2, user: "hola", message: "holapedro" },
    { id: 3, user: "hola", message: "holapedro" }
  ];

  // Handle click event for delete button
  const handleDeleteNotifications = () => {
    // Logic to delete notifications
  };

  return (
    <div className="min-h-screen p-4">
      <div className="pt-8 max-w-4xl mx-auto">
        <h2 className="text-white text-2xl mb-4">Notificaciones</h2>
        <div className="space-y-4 mb-4">
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} user={notification.user} message={notification.message} />
          ))}
        </div>
        <DeleteButton  />
      </div>
    </div>
  );
}
  