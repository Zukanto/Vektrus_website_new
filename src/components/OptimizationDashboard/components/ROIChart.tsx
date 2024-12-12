import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ROIChartProps } from '../types';

const ROIChart: React.FC<ROIChartProps> = ({ data, savings }) => {
  return (
    <div className="p-6 bg-gray-800 border-gray-700 rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-6">Potential Improvements</h3>
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="reach" fill="#2DD4BF" name="Reach" />
            <Bar dataKey="cost" fill="#4F46E5" name="Cost (€)" />
            <Bar dataKey="hours" fill="#EC4899" name="Hours/Month" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4 text-gray-300">
        <p>Monthly Budget Savings: €{savings.budget > 0 ? savings.budget.toFixed(2) : '0'}</p>
        <p>Monthly Time Savings: {savings.time > 0 ? savings.time.toFixed(1) : '0'} hours</p>
        <p>Potential Reach: {savings.reach.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ROIChart;