import React from 'react';
import { Check, Loader2, ArrowRight } from 'lucide-react';
import { StepItemProps } from '../types';

const StepItem: React.FC<StepItemProps> = ({ step, isActive, isCompleted }) => {
  return (
    <div
      className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-primary/10 scale-105"
          : isCompleted
          ? "bg-green-500/10"
          : "bg-gray-700/50"
      }`}
    >
      <div className="flex-shrink-0">
        {isCompleted ? (
          <Check className="w-6 h-6 text-green-500" />
        ) : isActive ? (
          <Loader2 className="w-6 h-6 text-primary animate-spin" />
        ) : (
          <ArrowRight className="w-6 h-6 text-gray-400" />
        )}
      </div>
      <div>
        <h3 className="font-semibold text-white">{step.title}</h3>
        <p className="text-sm text-gray-300">{step.description}</p>
      </div>
    </div>
  );
};

export default StepItem;