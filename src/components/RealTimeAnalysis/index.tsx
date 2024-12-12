import React, { useState } from 'react';
import { toast } from 'sonner';
import StepItem from './components/StepItem';
import AnalysisControls from './components/AnalysisControls';
import ContentDisplay from './components/ContentDisplay';
import { ANALYSIS_STEPS, SAMPLE_CONTENTS } from './constants';

const RealTimeAnalysis = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [generatedContent, setGeneratedContent] = useState<string>("");

  const processSteps = () => {
    let currentStepIndex = 0;
    const processNextStep = () => {
      if (currentStepIndex < ANALYSIS_STEPS.length) {
        const step = ANALYSIS_STEPS[currentStepIndex];
        setCurrentStep(step.id);
        
        setTimeout(() => {
          setCompletedSteps(prev => [...prev, step.id]);
          currentStepIndex++;
          
          if (currentStepIndex === ANALYSIS_STEPS.length) {
            const randomContent = SAMPLE_CONTENTS[Math.floor(Math.random() * SAMPLE_CONTENTS.length)];
            setGeneratedContent(randomContent);
            setIsAnalyzing(false);
            toast.success("Analyse erfolgreich abgeschlossen!");
          } else {
            processNextStep();
          }
        }, step.duration);
      }
    };
    processNextStep();
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setCurrentStep(0);
    setCompletedSteps([]);
    setGeneratedContent("");
    processSteps();
  };

  return (
    <section className="w-full py-24 bg-[#0B1221]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-[#00EAF2] to-[#00EFC8] bg-clip-text text-transparent sm:text-5xl">
            Echtzeit-Datenanalyse
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl">
            Erleben Sie live, wie unsere KI Daten analysiert und optimierten Content erstellt
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="p-6 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg">
            <div className="space-y-6">
              {ANALYSIS_STEPS.map((step) => (
                <StepItem
                  key={step.id}
                  step={step}
                  isActive={currentStep === step.id}
                  isCompleted={completedSteps.includes(step.id)}
                />
              ))}
            </div>
            <AnalysisControls
              isAnalyzing={isAnalyzing}
              onStartAnalysis={startAnalysis}
            />
          </div>
          <div className="p-6 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Generierter Content</h3>
            <ContentDisplay
              content={generatedContent}
              isAnalyzing={isAnalyzing}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeAnalysis;