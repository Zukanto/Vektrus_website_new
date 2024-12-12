import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureButtonProps {
  icon: LucideIcon;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
        isActive
          ? 'bg-gray-700 text-white'
          : 'text-gray-400 hover:text-gray-300'
      }`}
    >
      {title}
    </button>
  );
};

export default FeatureButton;