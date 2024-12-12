import { CalculationInputs, CalculationResults, ChartData } from './types';
import { VEKTRUS_MONTHLY_COST, VEKTRUS_WEEKLY_HOURS } from './constants';

export const calculateResults = (inputs: CalculationInputs): CalculationResults => {
  // Direct savings calculations
  const monthlySavedCost = Math.max(0, inputs.currentBudget - VEKTRUS_MONTHLY_COST);
  const weeklySavedHours = Math.max(0, inputs.weeklyHours - VEKTRUS_WEEKLY_HOURS);

  return {
    weeklySavedHours,
    monthlySavedCost,
    originalTime: inputs.weeklyHours,
    optimizedTime: VEKTRUS_WEEKLY_HOURS,
    originalCost: inputs.currentBudget,
    optimizedCost: VEKTRUS_MONTHLY_COST
  };
};

export const generateChartData = (results: CalculationResults): ChartData[] => {
  return [
    {
      name: 'Time (hours/week)',
      current: results.originalTime,
      optimized: results.optimizedTime,
    },
    {
      name: 'Cost (€/month)',
      current: results.originalCost,
      optimized: results.optimizedCost,
    }
  ];
};

export const formatCurrency = (amount: number): string => {
  return `€${amount.toLocaleString()}`;
};

export const calculatePercentage = (value: number, total: number): number => {
  return total > 0 ? (value / total) * 100 : 0;
};