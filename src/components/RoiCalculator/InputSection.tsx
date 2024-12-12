import React from 'react';
import { CalculationInputs } from './types';
import InputField from './components/InputField';
import VektrusCosts from './components/VektrusCosts';

interface InputSectionProps {
  inputs: CalculationInputs;
  onChange: (inputs: CalculationInputs) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ inputs, onChange }) => {
  const handleInputChange = (field: keyof CalculationInputs, value: number) => {
    onChange({ ...inputs, [field]: value });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-6">ROI Calculator</h3>
      <div className="space-y-4">
        <InputField
          label="Current Monthly Budget"
          value={inputs.currentBudget}
          onChange={(value) => handleInputChange('currentBudget', value)}
          unit="€"
        />
        <InputField
          label="Current Weekly Hours Spent"
          value={inputs.weeklyHours}
          onChange={(value) => handleInputChange('weeklyHours', value)}
          unit="hours"
        />
        <InputField
          label="Current Monthly Reach"
          value={inputs.monthlyReach}
          onChange={(value) => handleInputChange('monthlyReach', value)}
        />
        <VektrusCosts />
      </div>
    </div>
  );
}

export default InputSection;