"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import RoomItem from '@/components/rooms/RoomItem'; // Asegúrate de que la ruta es correcta
import useRooms from '@/hooks/useRooms';


const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {rooms,isLoading,error} = useRooms("https://demo.intecrobots.com/api/salas");


  console.log(rooms,error)


  if(error){
    return (
      <div>
        Error
        
      </div>
    );
  }

  if(isLoading){
    return (
      <div className='text-white'>
        <h1>Cargando</h1>
      </div>
    );
  }



  const filteredRooms = searchTerm
    ? rooms.records.filter((room:any) =>
        room.sala.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : rooms.records;


  rooms.records.map((ele:any) => console.log(ele));
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
          {filteredRooms.map((room:any, index:number) => (
            <RoomItem
              key={index}
              id={room.id}
              sala={room.name}
              puntomapa={room.puntomapa}
              initialState={room.estado}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
