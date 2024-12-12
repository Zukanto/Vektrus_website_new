import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CalculationResults } from './types';
import { generateChartData } from './utils';
import Chart from './components/Chart';
import SavingsMetric from './components/SavingsMetric';

interface ResultsSectionProps {
  results: CalculationResults;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => {
  const chartData = generateChartData(results);
  
  // Calculate percentage savings
  const timeSavingsPercentage = ((results.weeklySavedHours / results.originalTime) * 100) || 0;
  const costSavingsPercentage = ((results.monthlySavedCost / results.originalCost) * 100) || 0;

  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Projected Improvements</h3>
        <Chart data={chartData} />
      </div>

      <div className="bg-gray-800 rounded-lg p-6 space-y-6">
        <SavingsMetric
          label="Weekly Time Savings"
          value={results.weeklySavedHours}
          unit="hours"
          percentage={timeSavingsPercentage}
        />
        <SavingsMetric
          label="Monthly Cost Savings"
          value={results.monthlySavedCost}
          unit="€"
          percentage={costSavingsPercentage}
        />

        <button className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-secondary-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
          Get Started
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ResultsSection;