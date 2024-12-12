import React from 'react';
import { Optimizations } from '../types';
import { OPTIMIZATIONS } from '../constants';

interface PostOptimizationProps {
  selectedOptimization: string | null;
  onOptimizationSelect: (opt: string) => void;
}

const PostOptimization: React.FC<PostOptimizationProps> = ({
  selectedOptimization,
  onOptimizationSelect,
}) => {
  return (
    <>
      <div className="p-6 bg-gray-800 border-gray-700 rounded-lg">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Interactive Post</h3>
          <div className="relative p-4 bg-gray-700 rounded-lg">
            <p className="text-white mb-4">
              {selectedOptimization
                ? OPTIMIZATIONS[selectedOptimization as keyof Optimizations].after
                : OPTIMIZATIONS.text.before}
            </p>
            <div className="flex gap-2 flex-wrap">
              {['text', 'audience', 'image'].map((opt) => (
                <button
                  key={opt}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-white hover:scale-105 transition-transform"
                  onClick={() => onOptimizationSelect(opt)}
                >
                  Optimize {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-800 border-gray-700 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">
          {selectedOptimization
            ? `${selectedOptimization.charAt(0).toUpperCase() + selectedOptimization.slice(1)} Optimization`
            : 'Select an optimization'}
        </h3>
        {selectedOptimization && (
          <div className="space-y-4 animate-fade-in">
            <div className="p-4 bg-gray-700 rounded-lg">
              <p className="text-gray-300 mb-2">Before:</p>
              <p className="text-white">
                {OPTIMIZATIONS[selectedOptimization as keyof Optimizations].before}
              </p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <p className="text-gray-300 mb-2">After:</p>
              <p className="text-white">
                {OPTIMIZATIONS[selectedOptimization as keyof Optimizations].after}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostOptimization;