"use client"
import React, { useEffect, useState } from 'react';
import NotificationCard from '@/components/notification/NotificationCard';
import DeleteButton from '@/components/notification/DeleteButton';
import SvgSpinner from '@/components/spinner/SvgSpinner'; // Asegúrate de que la ruta es correcta

export default function NotificationsPage() {

  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajusta el tiempo según necesites
  }, []);

  return (
    <>
      <div className={`min-h-screen p-4 ${isLoading ? 'flex justify-center items-center' : ''}`}>
        {isLoading ? (
          <SvgSpinner />
        ) : (
          <div className="pt-8 max-w-4xl mx-auto">
            <h2 className="text-white text-2xl mb-4">Notificaciones</h2>
            <div className="space-y-4 mb-4">
              {notifications.map((notification) => (
                <NotificationCard key={notification.id} user={notification.user} message={notification.message} />
              ))}
            </div>
            <DeleteButton /> {/* Asegúrate de pasar la función onClick correctamente si es necesario */}
          </div>
        )}
      </div>
    </>
  );
}
  