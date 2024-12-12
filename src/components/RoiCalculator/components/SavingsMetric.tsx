import React from 'react';
import { formatCurrency } from '../utils';

interface SavingsMetricProps {
  label: string;
  value: number;
  unit: string;
  percentage: number;
}

const SavingsMetric: React.FC<SavingsMetricProps> = ({ 
  label, 
  value, 
  unit, 
  percentage 
}) => {
  const displayValue = unit === '€' ? formatCurrency(value) : `${value} ${unit}`;

  return (
    <div>
      <p className="text-gray-400 mb-2">{label}</p>
      <p className="text-2xl font-bold text-white">
        {displayValue}
        {percentage > 0 && (
          <span className="text-teal-400 text-base ml-2">
            Save {Math.round(percentage)}%
          </span>
        )}
      </p>
    </div>
  );
};