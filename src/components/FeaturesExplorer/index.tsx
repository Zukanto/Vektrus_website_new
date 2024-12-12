import React, { useState } from 'react';
import { TrendingUp, UserCheck, BarChart3 } from 'lucide-react';
import { Feature } from './types';
import FeatureContent from './FeatureContent';

const features: Feature[] = [
  {
    id: 'trends',
    title: 'Social Media Analytics',
    description: 'Pioneering AI-driven social media optimization through advanced analytics and real-time trend analysis.',
    prompt: 'Analyze this week\'s social media performance',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: 'content',
    title: 'Content Generation',
    description: 'AI-powered content creation and optimization for maximum engagement.',
    prompt: 'Generate engaging content for tech audience',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    id: 'audience',
    title: 'Audience Insights',
    description: 'Deep audience analysis and segmentation for targeted content.',
    prompt: 'Analyze audience behavior patterns',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  }
];

const FeaturesExplorer = () => {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);

  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Card Container */}
        <div className="border border-gray-700 rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-sm p-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Social Media Optimization
            </h2>
            <p className="text-base text-gray-400">
              The best quality insights to fuel your social media strategy
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeFeature.id === feature.id
                    ? 'bg-gradient-to-r from-teal-400 to-secondary-400 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <div className="space-y-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                {activeFeature.description}
              </p>
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-secondary-400 text-white rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:from-teal-300 hover:to-secondary-300">
                Optimize My Content →
              </button>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="relative -mt-4 transform transition-all duration-300 hover:scale-[1.02]">
              <FeatureContent feature={activeFeature} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesExplorer;