export interface ROIMetrics {
  budget: string;
  timeSpent: string;
  currentReach: string;
}

export interface ROICalculation {
  optimizedReach: number;
  budgetSavings: number;
  timeSavings: number;
  data: Array<{
    name: string;
    reach: number;
    cost: number;
    hours: number;
  }>;
}

export interface ROIInputProps {
  metrics: ROIMetrics;
  onMetricsChange: (metrics: ROIMetrics) => void;
  onCalculate: () => void;
}

export interface ROIChartProps {
  data: ROICalculation['data'];
  savings: {
    budget: number;
    time: number;
    reach: number;
  };
}