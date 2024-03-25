"use client";

import React, { useState } from 'react';

interface RoomItemProps {
  name: string;
  description: string;
  initialState: boolean;
}

const RoomItem: React.FC<RoomItemProps> = ({ name, description, initialState }) => {
  const [enabled, setEnabled] = useState(initialState);

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg m-2 shadow-md">
      <div>
        <p className="text-lg text-white">{name}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="form-switch">
        <label className="switch">
            <input  type="checkbox"
                    className="toggle"
                    checked={enabled}
                    onChange={() => setEnabled(!enabled)}
                    id={`switch-${name}`} />
            <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default RoomItem;
