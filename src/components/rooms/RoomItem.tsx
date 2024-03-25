"use client";

import  useRoomUpdate  from '@/hooks/useRoomUpdate';
import React, { useState } from 'react';

interface RoomItemProps {
  id:number;
  sala: string;
  puntomapa: string;
  initialState: boolean;
  token:any;
}

const RoomItem: React.FC<RoomItemProps> = ({ id,sala, puntomapa, initialState,token}) => {
  const [enabled, setEnabled] = useState(initialState);

  const  {isUpdating,updateRoomState} = useRoomUpdate();

  const toggleRoomState = async () => {

    if (isUpdating || !id) return;

    const newIsEnabled = !enabled;
    setEnabled(newIsEnabled);
   
    await updateRoomState(id, newIsEnabled,token);
  };




  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg m-2 shadow-md">
  <div>
    <p className="text-lg text-white">{sala}</p>
    <p className="text-sm text-gray-400">{puntomapa}</p>
  </div>
  <div className="form-switch relative">
    <label className="switch">
      {isUpdating ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="loader animate-spin ease-linear rounded-full border-8 border-t-8 border-gray-200 h-8 w-8 "></div>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            className="toggle"
            checked={enabled}
            onChange={() => toggleRoomState()}
            id={`switch-${id}`}
          />
          <span className="slider round"></span>
        </>
      )}
    </label>
  </div>
</div>


  );
};

export default RoomItem;
