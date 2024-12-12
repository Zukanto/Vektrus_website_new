import React from 'react';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  value, 
  onChange, 
  unit,
  min = 0 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label} {unit && `(${unit})`}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Math.max(min, Number(e.target.value)))}
        min={min}
        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent"
      />
    </div>
  );
};