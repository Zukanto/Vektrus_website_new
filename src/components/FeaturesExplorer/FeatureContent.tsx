import React from 'react';
import { Feature } from './types';

interface FeatureContentProps {
  feature: Feature;
}

const FeatureContent: React.FC<FeatureContentProps> = ({ feature }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Input Field */}
      <div className="p-6 border-b border-gray-700">
        <input
          type="text"
          value={feature.prompt}
          readOnly
          className="w-full bg-gray-700 text-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="Enter your analysis request..."
        />
      </div>

      {/* Main Image */}
      <div className="relative h-[400px]">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>
    </div>
  );
};

export default FeatureContent;