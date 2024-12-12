import React from 'react';
import { Loader2, RefreshCcw } from 'lucide-react';
import { AnalysisControlsProps } from '../types';

const AnalysisControls: React.FC<AnalysisControlsProps> = ({ isAnalyzing, onStartAnalysis }) => {
  return (
    <button
      onClick={onStartAnalysis}
      disabled={isAnalyzing}
      className="w-full mt-6 bg-gradient-to-r from-[#00EAF2] to-[#00EFC8] hover:opacity-90 transition-opacity text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center"
    >
      {isAnalyzing ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyse läuft...
        </>
      ) : (
        <>
          <RefreshCcw className="mr-2 h-4 w-4" />
          Neue Analyse starten
        </>
      )}
    </button>
  );
};

export default AnalysisControls;