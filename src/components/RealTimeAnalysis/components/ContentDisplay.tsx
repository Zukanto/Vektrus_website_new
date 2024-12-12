import React from 'react';
import { Check } from 'lucide-react';
import { ContentDisplayProps } from '../types';

const ContentDisplay: React.FC<ContentDisplayProps> = ({ content, isAnalyzing }) => {
  return (
    <div className="h-full flex flex-col">
      {content ? (
        <div className="flex-1 bg-gray-700/50 p-6 rounded-lg">
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-gray-300">Optimierter Post</span>
            </div>
            <p className="text-white text-lg leading-relaxed">{content}</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-400">
          {isAnalyzing ? (
            <p>Content wird generiert...</p>
          ) : (
            <p>Starten Sie die Analyse, um optimierten Content zu generieren</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentDisplay;