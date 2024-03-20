import React from 'react';
import Head from 'next/head';
import RoomItem from '@/components/rooms/RoomItem'; // Asegúrate de usar la ruta correcta al componente RoomItem

const roomData = [
  { name: 'Sala Prueba', description: 'prueba', enabled: true },
  { name: 'Sala Google', description: 'google', enabled: false },
  { name: 'Sala Meta', description: 'meta', enabled: false },
  // Agregar más salas según sea necesario
];

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Room Control</title>
        <meta name="description" content="Responsive room control interface created with Next.js and TailwindCSS" />
      </Head>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4">
          {roomData.map((room, index) => (
            <RoomItem
              key={index}
              name={room.name}
              description={room.description}
              initialState={room.enabled}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
