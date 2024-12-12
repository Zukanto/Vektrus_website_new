import React from 'react';
import { CALCULATOR_LABELS } from '../constants';

const VektrusCosts: React.FC = () => {
  return (
    <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
      <p className="text-sm text-gray-300">
        Switch to Vektrus and pay only:
        <br />
        <span className="text-teal-400 mt-2 block">
          • {CALCULATOR_LABELS.vektrusCost}
          <br />
          • {CALCULATOR_LABELS.vektrusTime}
        </span>
      </p>
    </div>
  );
};

export default VektrusCosts;