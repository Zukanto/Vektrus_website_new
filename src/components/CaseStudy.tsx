import React, { useState } from 'react';
import { ArrowRight, Activity, Target, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Milestone {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  metrics?: {
    before: number;
    after: number;
    label: string;
  };
  chartData?: Array<{
    name: string;
    value: number;
  }>;
}

const milestones: Milestone[] = [
  {
    id: 'problem',
    title: 'Problem Identification',
    icon: Activity,
    description: 'A medium-sized business faced declining social media engagement, with posts reaching only a fraction of their follower base.',
    metrics: {
      before: 1.5,
      after: 1.5,
      label: 'Engagement Rate (%)'
    },
    chartData: [
      { name: 'Jan', value: 1.5 },
      { name: 'Feb', value: 1.4 },
      { name: 'Mar', value: 1.3 },
      { name: 'Apr', value: 1.2 },
      { name: 'May', value: 1.1 }
    ]
  },
  {
    id: 'implementation',
    title: 'Implementation',
    icon: Target,
    description: 'Vektrus analyzed their content strategy and implemented AI-driven optimizations for post timing, content, and audience targeting.',
    metrics: {
      before: 1.5,
      after: 2.8,
      label: 'Engagement Rate (%)'
    },
    chartData: [
      { name: 'May', value: 1.1 },
      { name: 'Jun', value: 1.8 },
      { name: 'Jul', value: 2.2 },
      { name: 'Aug', value: 2.5 },
      { name: 'Sep', value: 2.8 }
    ]
  },
  {
    id: 'results',
    title: 'Results & Optimization',
    icon: TrendingUp,
    description: 'Within 3 months, engagement rates nearly tripled, reaching 4.2% with consistent growth in follower count and post reach.',
    metrics: {
      before: 1.5,
      after: 4.2,
      label: 'Engagement Rate (%)'
    },
    chartData: [
      { name: 'Sep', value: 2.8 },
      { name: 'Oct', value: 3.2 },
      { name: 'Nov', value: 3.7 },
      { name: 'Dec', value: 4.0 },
      { name: 'Jan', value: 4.2 }
    ]
  }
];

const CaseStudy = () => {
  const [activeMilestone, setActiveMilestone] = useState<Milestone>(milestones[0]);
  const [sliderValue, setSliderValue] = useState(50);

  const getIconColor = (milestone: Milestone) => {
    switch (milestone.id) {
      case 'problem':
        return 'text-red-400';
      case 'implementation':
        return 'text-teal-400';
      case 'results':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const getBorderColor = (milestone: Milestone) => {
    switch (milestone.id) {
      case 'problem':
        return activeMilestone.id === milestone.id ? 'border-red-400' : 'border-gray-700 hover:border-red-400/50';
      case 'implementation':
        return activeMilestone.id === milestone.id ? 'border-teal-400' : 'border-gray-700 hover:border-teal-400/50';
      case 'results':
        return activeMilestone.id === milestone.id ? 'border-green-400' : 'border-gray-700 hover:border-green-400/50';
      default:
        return 'border-gray-700';
    }
  };

  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-secondary-400 text-transparent bg-clip-text">
              Success Story
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how Vektrus transformed social media performance for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="space-y-6">
            {milestones.map((milestone) => (
              <button
                key={milestone.id}
                onClick={() => setActiveMilestone(milestone)}
                className={`w-full p-6 rounded-lg border transition-all duration-300 ${getBorderColor(milestone)}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center ${
                    activeMilestone.id === milestone.id ? 'animate-pulse' : ''
                  }`}>
                    <milestone.icon className={`${getIconColor(milestone)}`} size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">Click to view details</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="space-y-8">
            {/* Description Card */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">{activeMilestone.title}</h3>
              <p className="text-gray-300">{activeMilestone.description}</p>
            </div>

            {/* Metrics Card */}
            {activeMilestone.metrics && (
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-6">Performance Metrics</h4>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={activeMilestone.chartData}>
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
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#2DD4BF"
                        strokeWidth={2}
                        dot={{ fill: '#2DD4BF' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <p className="text-gray-400 text-sm">Before</p>
                    <p className="text-2xl font-bold text-white">
                      {activeMilestone.metrics.before}%
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <p className="text-gray-400 text-sm">After</p>
                    <p className="text-2xl font-bold text-white">
                      {activeMilestone.metrics.after}%
                      <span className="text-teal-400 text-base ml-2">
                        +{((activeMilestone.metrics.after - activeMilestone.metrics.before) / activeMilestone.metrics.before * 100).toFixed(0)}%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Ready to achieve similar results?</h4>
              <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-secondary-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Transform Your Strategy
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;