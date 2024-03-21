import React from 'react';

type NotificationCardProps = {
    user: string;
    message: string;
  };
  
  const NotificationCard: React.FC<NotificationCardProps> = ({ user, message }) => (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center">
      <div className="rounded-full bg-green-500 w-8 h-8 mr-3"></div>
      <div>
        <div className="text-green-400">{user}</div>
        <div className="text-gray-300">{message}</div>
      </div>
    </div>
  );
  
  export default NotificationCard;
  