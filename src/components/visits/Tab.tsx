import React from 'react';

interface TabProps {
  isActive: boolean;
  onClick: () => void;
  text: string;
}

const Tab: React.FC<TabProps> = ({ isActive, onClick, text }) => {
    return (
      <button
        onClick={onClick}
        className={`mr-4 py-2 px-4 ${isActive ? 'text-white border-b-2 border-gray-500' : 'text-gray-400 hover:text-white'}`}
      >
        {text}
      </button>
    );
  };
  

export default Tab;
