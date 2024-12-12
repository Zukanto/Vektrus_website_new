import React from 'react';
import { TabButtonProps } from '../types';

const TabButton: React.FC<TabButtonProps> = ({ isActive, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive ? 'bg-white/10' : 'hover:bg-white/5'
      } text-white`}
    >
      {children}
    </button>
  );
};

export default TabButton;