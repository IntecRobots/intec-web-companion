import React from 'react';
import { IconType } from 'react-icons';

interface SquareButtonProps {
  icon: IconType;
  label: string;
}

const SquareButton: React.FC<SquareButtonProps> = ({ icon: Icon, label }) => {
  return (
    <button
      className="flex flex-col items-center justify-center p-8 bg-gray-800 bg-opacity-85 rounded-2xl shadow-lg hover:bg-opacity-60 border-2 border-gray-700 transition duration-300 hover:scale-105 cursor-pointer"
    >
      <Icon className="text-gray-300 text-7xl mb-4 transition duration-300 hover:text-shadow-md" />
      <span className="text-white font-semibold transition duration-300">{label}</span>
    </button>
  );
};

export default SquareButton;
