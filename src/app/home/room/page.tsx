"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import RoomItem from '@/components/rooms/RoomItem'; // Asegúrate de que la ruta es correcta

const roomData = [
  { name: 'Sala Prueba', description: 'prueba', enabled: true },
  { name: 'Sala Google', description: 'google', enabled: false },
  { name: 'Sala Meta', description: 'meta', enabled: false },
  // Agregar más salas según sea necesario
];

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRooms = searchTerm
    ? roomData.filter(room =>
        room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : roomData;

  return (
    <>
      <Head>
        <title>Room Control</title>
        <meta name="description" content="Responsive room control interface with search functionality, created with Next.js and TailwindCSS" />
      </Head>
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="mb-4">
          <input
            type="text"
            className="w-full h-10 pl-4 pr-10 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:shadow-outline"
            placeholder="Buscar sala..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mx-auto max-w-6xl space-y-4">
          {filteredRooms.map((room, index) => (
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
