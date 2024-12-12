export interface CalculationInputs {
  currentBudget: number;
  weeklyHours: number;
  monthlyReach: number;
}

export interface CalculationResults {
  weeklySavedHours: number;
  monthlySavedCost: number;
  originalTime: number;
  optimizedTime: number;
  originalCost: number;
  optimizedCost: number;
}

export interface ChartData {
  name: string;
  current: number;
  optimized: number;
}