import React from 'react';
import { ArrowRight, CircleUserRound } from 'lucide-react';

const DataEngine = () => {
  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-teal-400 to-secondary-400 text-transparent bg-clip-text">
            Scale Data Engine
          </span>
        </h2>
        <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto text-center">
          For AI teams, Scale Data Engine improves your models by improving your data.
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Column - AI Text Generator Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-800 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2">
                  <CircleUserRound className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-400 text-sm">Why i</span>
                </div>
              </div>

              <div className="text-left space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-teal-400 font-medium mb-2">Input Prompt</h4>
                  <p className="text-gray-300">Write a creative story about AI and human collaboration.</p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-secondary-400 font-medium mb-2">AI Response</h4>
                  <p className="text-gray-300">
                    In the year 2045, the partnership between humans and AI reached new heights...
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - RLHF Description */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">RLHF</h3>
              <p className="text-xl bg-gradient-to-r from-teal-400 to-secondary-400 text-transparent bg-clip-text font-semibold">
                Powering the next generation of Generative AI
              </p>
              <p className="text-gray-300 leading-relaxed">
                Scale Generative AI Data Engine powers the most advanced LLMs and 
                generative models in the world through world-class RLHF, data 
                generation, model evaluation, safety, and alignment.
              </p>
              <div className="pt-4">
                <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-secondary-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Label My Data
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEngine;