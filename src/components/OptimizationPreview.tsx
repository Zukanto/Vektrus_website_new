import React, { useState } from 'react';
import { Wand2, Users, Image as ImageIcon, ArrowRight } from 'lucide-react';

interface OptimizationMetrics {
  engagement: number;
  reach: number;
}

const OptimizationPreview = () => {
  const [activeOptimization, setActiveOptimization] = useState<string | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  const beforeContent = {
    text: "Discover our new products.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    hashtags: "#products #new",
    metrics: {
      engagement: 2,
      reach: 50000
    }
  };

  const afterContent = {
    text: "🍂 Fall in love with our latest collection! 20% off for early birds. Don't miss out! 🌟",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    hashtags: "#FallCollection #LimitedTime #EarlyBirdDeals #TrendAlert",
    metrics: {
      engagement: 2.5,
      reach: 57500
    }
  };

  const optimizations = [
    {
      id: 'text',
      name: 'Text Optimization',
      icon: Wand2,
      description: 'Enhance engagement with AI-powered content suggestions'
    },
    {
      id: 'audience',
      name: 'Audience Analysis',
      icon: Users,
      description: 'Target the right audience with smart hashtag recommendations'
    },
    {
      id: 'image',
      name: 'Image Enhancement',
      icon: ImageIcon,
      description: 'Get AI-curated visuals that drive engagement'
    }
  ];

  const handleOptimize = () => {
    setIsOptimized(true);
  };

  const content = isOptimized ? afterContent : beforeContent;

  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-secondary-400 text-transparent bg-clip-text">
              AI-Powered Post Optimization
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how our AI transforms your social media content in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Preview Panel */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
              
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Post Preview
              </h3>

              <div className="space-y-4 relative">
                {/* Post Content */}
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300 mb-4">{content.text}</p>
                  <img
                    src={content.image}
                    alt="Post preview"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-teal-400">{content.hashtags}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Engagement Rate</p>
                    <p className="text-2xl font-bold text-white">
                      {content.metrics.engagement}%
                      {isOptimized && (
                        <span className="text-teal-400 text-base ml-2">+25%</span>
                      )}
                    </p>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Reach</p>
                    <p className="text-2xl font-bold text-white">
                      {content.metrics.reach.toLocaleString()}
                      {isOptimized && (
                        <span className="text-teal-400 text-base ml-2">+15%</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Optimization Controls
              </h3>

              <div className="space-y-4">
                {optimizations.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setActiveOptimization(opt.id)}
                    className={`w-full group p-4 rounded-lg border transition-all duration-300 ${
                      activeOptimization === opt.id
                        ? 'border-teal-400 bg-teal-400/10'
                        : 'border-gray-700 hover:border-teal-400/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-400/10 flex items-center justify-center">
                        <opt.icon className="text-teal-400" size={20} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-white font-medium">{opt.name}</h4>
                        <p className="text-gray-400 text-sm">{opt.description}</p>
                      </div>
                    </div>
                  </button>
                ))}

                <button
                  onClick={handleOptimize}
                  disabled={isOptimized}
                  className={`w-full group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isOptimized
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-400 to-secondary-400 text-white hover:scale-105'
                  }`}
                >
                  {isOptimized ? 'Optimization Applied' : 'Apply Optimization'}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Results Panel */}
            {isOptimized && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Optimization Results
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    ✓ Enhanced engagement with emotional triggers
                  </p>
                  <p className="text-gray-300">
                    ✓ Optimized hashtags for better reach
                  </p>
                  <p className="text-gray-300">
                    ✓ Improved visual appeal with seasonal imagery
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationPreview;