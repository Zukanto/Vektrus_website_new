import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DataEngine from './components/DataEngine';
import RoiCalculator from './components/RoiCalculator';
import OptimizationPreview from './components/OptimizationPreview';
import CaseStudy from './components/CaseStudy';
import FeaturesExplorer from './components/FeaturesExplorer';
import RealTimeAnalysis from './components/RealTimeAnalysis';
import OptimizationDashboard from './components/OptimizationDashboard';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <DataEngine />
      <RoiCalculator />
      <OptimizationPreview />
      <CaseStudy />
      <FeaturesExplorer />
      <RealTimeAnalysis />
      <OptimizationDashboard />
      <SuccessStories />
      <Footer />
    </div>
  );
}

export default App;