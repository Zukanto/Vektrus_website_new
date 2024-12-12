import React, { useState } from 'react';
import { toast } from 'sonner';
import ROICalculator from './components/ROICalculator';
import ROIChart from './components/ROIChart';
import { ROIMetrics } from './types';
import { calculateROI } from './utils';

const OptimizationDashboard = () => {
  const [metrics, setMetrics] = useState<ROIMetrics>({
    budget: '',
    timeSpent: '',
    currentReach: ''
  });

  const handleCalculate = () => {
    const roi = calculateROI(metrics);
    if (roi.budgetSavings > 0) {
      toast.success(`You could save €${roi.budgetSavings.toFixed(2)} per month with Vektrus!`);
    }
    if (roi.timeSavings > 0) {
      toast.success(`Save ${roi.timeSavings.toFixed(1)} hours per month with Vektrus!`);
    }
  };

  const roi = calculateROI(metrics);

  return (
    <section className="w-full py-24 bg-[#0B1221]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent sm:text-5xl">
            ROI Calculator
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl">
            See how much you can save with Vektrus
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          <ROICalculator
            metrics={metrics}
            onMetricsChange={setMetrics}
            onCalculate={handleCalculate}
          />
          <ROIChart
            data={roi.data}
            savings={{
              budget: roi.budgetSavings,
              time: roi.timeSavings,
              reach: roi.optimizedReach
            }}
          />
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
            Get Started with Vektrus →
          </button>
        </div>
      </div>
    </section>
  );
};

export default OptimizationDashboard;