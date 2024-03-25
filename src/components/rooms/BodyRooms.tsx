"use client"
import React, { useState } from "react";
import RoomItem from "./RoomItem";

interface PropsBodyRoom {
  listRooms: any[];
  token: any;
}

const BodyRoom: React.FC<PropsBodyRoom> = ({ listRooms, token }) => {
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredRooms = searchTerm
    ? listRooms.filter((room: any) =>
        room.sala.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : listRooms;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="mb-4">
          <input
            type="text"
            className="w-full h-10 pl-4 pr-10 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:shadow-outline"
            placeholder="Buscar sala..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="mx-auto max-w-6xl space-y-4">
          {filteredRooms.map((room: any, index: number) => (
            <RoomItem
              key={room.id}
              id={room.id}
              sala={room.name}
              puntomapa={room.puntomapa}
              initialState={room.estado}
              token={token}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyRoom;
