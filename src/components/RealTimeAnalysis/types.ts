export interface AnalysisStep {
  id: number;
  title: string;
  description: string;
  duration: number;
}

export interface StepItemProps {
  step: AnalysisStep;
  isActive: boolean;
  isCompleted: boolean;
}

export interface AnalysisControlsProps {
  isAnalyzing: boolean;
  onStartAnalysis: () => void;
}

export interface ContentDisplayProps {
  content: string;
  isAnalyzing: boolean;
}