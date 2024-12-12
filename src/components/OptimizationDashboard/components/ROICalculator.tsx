import React from 'react';
import { ROIInputProps } from '../types';
import { VEKTRUS_MONTHLY_PRICE, VEKTRUS_WEEKLY_HOURS } from '../constants';

const ROICalculator: React.FC<ROIInputProps> = ({
  metrics,
  onMetricsChange,
  onCalculate,
}) => {
  return (
    <div className="p-6 bg-gray-800 border-gray-700 rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-6">Calculate Your ROI</h3>
      <div className="space-y-4">
        <div>
          <label className="text-gray-300 mb-2 block">Current Monthly Budget (€)</label>
          <input
            type="number"
            value={metrics.budget}
            onChange={(e) => onMetricsChange({ ...metrics, budget: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Current monthly spending"
          />
          <p className="text-sm text-gray-400 mt-1">Vektrus costs €{VEKTRUS_MONTHLY_PRICE}/month</p>
        </div>
        <div>
          <label className="text-gray-300 mb-2 block">Current Hours Spent Weekly</label>
          <input
            type="number"
            value={metrics.timeSpent}
            onChange={(e) => onMetricsChange({ ...metrics, timeSpent: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Current weekly hours"
          />
          <p className="text-sm text-gray-400 mt-1">With Vektrus: {VEKTRUS_WEEKLY_HOURS} hours/week</p>
        </div>
        <div>
          <label className="text-gray-300 mb-2 block">Current Monthly Reach</label>
          <input
            type="number"
            value={metrics.currentReach}
            onChange={(e) => onMetricsChange({ ...metrics, currentReach: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Current monthly reach"
          />
        </div>
        <button 
          className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
          onClick={onCalculate}
        >
          Calculate Savings
        </button>
      </div>
    </div>
  );
};

export default ROICalculator;