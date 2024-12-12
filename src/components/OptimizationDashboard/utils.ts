import { ROIMetrics, ROICalculation } from './types';
import { VEKTRUS_MONTHLY_PRICE, VEKTRUS_WEEKLY_HOURS } from './constants';

export const calculateROI = (metrics: ROIMetrics): ROICalculation => {
  const currentBudget = parseFloat(metrics.budget) || 0;
  const currentHours = parseFloat(metrics.timeSpent) || 0;
  const reach = parseFloat(metrics.currentReach) || 0;
  
  const budgetSavings = currentBudget - VEKTRUS_MONTHLY_PRICE;
  const timeSavings = (currentHours - VEKTRUS_WEEKLY_HOURS) * 4; // Monthly hours saved
  const optimizedReach = reach * 1.4; // 40% improvement
  
  return {
    optimizedReach,
    budgetSavings,
    timeSavings,
    data: [
      { 
        name: 'Current', 
        reach: reach, 
        cost: currentBudget,
        hours: currentHours * 4 // Monthly hours
      },
      { 
        name: 'With Vektrus', 
        reach: optimizedReach, 
        cost: VEKTRUS_MONTHLY_PRICE,
        hours: VEKTRUS_WEEKLY_HOURS * 4 // Monthly hours
      }
    ]
  };
};