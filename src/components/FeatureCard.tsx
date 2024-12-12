import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      
      <div className="relative">
        <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-teal-400" size={24} />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <button className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-2 transition-colors group">
          Learn More
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;