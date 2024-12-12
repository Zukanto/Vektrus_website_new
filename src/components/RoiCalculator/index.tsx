import React, { useState } from 'react';
import { CalculationInputs } from './types';
import { calculateResults } from './utils';
import { CALCULATOR_LABELS } from './constants';
import InputField from './components/InputField';
import VektrusCosts from './components/VektrusCosts';
import ResultsSection from './components/ResultsSection';

const RoiCalculator = () => {
  const [inputs, setInputs] = useState<CalculationInputs>({
    currentBudget: 1000,
    weeklyHours: 10,
    monthlyReach: 50000
  });

  const handleInputChange = (field: keyof CalculationInputs) => (value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const results = calculateResults(inputs);

  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-secondary-400 text-transparent bg-clip-text">
              ROI Calculator
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how much time and money you can save with Vektrus
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Calculate Your Savings</h3>
            <div className="space-y-4">
              <InputField
                label={CALCULATOR_LABELS.currentBudget}
                value={inputs.currentBudget}
                onChange={handleInputChange('currentBudget')}
                unit="€"
              />
              <InputField
                label={CALCULATOR_LABELS.weeklyHours}
                value={inputs.weeklyHours}
                onChange={handleInputChange('weeklyHours')}
                unit="hours"
              />
              <InputField
                label={CALCULATOR_LABELS.monthlyReach}
                value={inputs.monthlyReach}
                onChange={handleInputChange('monthlyReach')}
              />
              <VektrusCosts />
            </div>
          </div>

          <ResultsSection results={results} />
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;