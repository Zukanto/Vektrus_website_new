import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PostOptimizationProps {
  onHover: (type: string) => void;
}

const PostOptimization: React.FC<PostOptimizationProps> = ({ onHover }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300">
      <div className="space-y-4">
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => onHover('text')}
        >
          <h4 className="text-white font-medium mb-2">Sample Post</h4>
          <p className="text-gray-300">
            Check out our latest product launch! 🚀 #innovation #tech
          </p>
          <div className="absolute inset-0 bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded flex items-center justify-center">
            <span className="text-teal-400 font-medium">Text Optimization</span>
          </div>
        </div>

        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => onHover('hashtags')}
        >
          <div className="flex gap-2">
            <span className="text-teal-400">#innovation</span>
            <span className="text-teal-400">#tech</span>
          </div>
          <div className="absolute inset-0 bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded flex items-center justify-center">
            <span className="text-teal-400 font-medium">Hashtag Analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoiCalculator = () => {
  const [budget, setBudget] = useState<number>(1000);
  const [time, setTime] = useState<number>(10);
  const [reach, setReach] = useState<number>(50000);
  const [activeOptimization, setActiveOptimization] = useState<string>('');

  const calculations = useMemo(() => {
    const efficiencyBoost = Math.floor(reach * 1.4); // 40% increase
    const costSavings = Math.floor(budget * 0.2); // 20% savings
    const timeReduction = Math.floor(time * 0.3); // 30% time savings

    return {
      efficiencyBoost,
      costSavings,
      timeReduction,
      chartData: [
        {
          name: 'Reach',
          current: reach,
          optimized: efficiencyBoost,
        },
        {
          name: 'Cost',
          current: budget,
          optimized: budget - costSavings,
        },
        {
          name: 'Time',
          current: time,
          optimized: time - timeReduction,
        },
      ],
    };
  }, [budget, time, reach]);

  const optimizationTips = {
    text: "AI suggests more engaging phrases and emotional triggers",
    hashtags: "Recommended hashtags based on trending topics and reach",
    default: "Hover over elements to see optimization suggestions",
  };

  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-secondary-400 text-transparent bg-clip-text">
              Optimization Dashboard
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how our AI can optimize your social media performance and calculate your potential ROI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">ROI Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Monthly Budget (€)
                  </label>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Time Spent (hours/week)
                  </label>
                  <input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(Number(e.target.value))}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Monthly Reach
                  </label>
                  <input
                    type="number"
                    value={reach}
                    onChange={(e) => setReach(Number(e.target.value))}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <PostOptimization onHover={setActiveOptimization} />
            
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Sparkles className="text-teal-400" />
                <p className="text-gray-300">
                  {optimizationTips[activeOptimization as keyof typeof optimizationTips] || optimizationTips.default}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Projected Improvements</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={calculations.chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '0.5rem',
                        color: '#D1D5DB'
                      }}
                    />
                    <Bar dataKey="current" fill="#374151" name="Current" />
                    <Bar dataKey="optimized" fill="#2DD4BF" name="Optimized" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 space-y-6">
              <div>
                <p className="text-gray-400 mb-2">Projected Monthly Reach</p>
                <p className="text-2xl font-bold text-white">
                  {calculations.efficiencyBoost.toLocaleString()} 
                  <span className="text-teal-400 text-base ml-2">+40%</span>
                </p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Monthly Cost Savings</p>
                <p className="text-2xl font-bold text-white">
                  €{calculations.costSavings.toLocaleString()}
                  <span className="text-teal-400 text-base ml-2">-20%</span>
                </p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Time Saved per Week</p>
                <p className="text-2xl font-bold text-white">
                  {calculations.timeReduction} hours
                  <span className="text-teal-400 text-base ml-2">-30%</span>
                </p>
              </div>

              <button className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-secondary-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;