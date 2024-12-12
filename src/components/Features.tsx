import React from 'react';
import { Star, Brain, Database } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Star,
    title: 'Frontier AI Research',
    description: 'Leading the way in AI innovation with cutting-edge research and development in machine learning and neural networks.'
  },
  {
    icon: Brain,
    title: 'Advanced ML Models',
    description: 'Access state-of-the-art machine learning models optimized for enterprise-scale deployment and performance.'
  },
  {
    icon: Database,
    title: 'Data Labeling at Scale',
    description: 'Automated data labeling solutions powered by AI to process and annotate large datasets efficiently.'
  }
];

const Features = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-secondary-400 text-transparent bg-clip-text">
              Frontier AI Research
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're committed to pushing the boundaries of AI technology while maintaining
            the highest safety standards and ethical considerations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;