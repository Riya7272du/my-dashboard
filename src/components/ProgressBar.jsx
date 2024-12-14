import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentStep }) => {
  const steps = [
    "Preliminary",
    "Your Details",
    "KYC",
    "Parties",
    "Claim",
    "Review",
    "Payment",
  ];

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index <= currentStep ? 'active' : ''}`}
        >
          <div className="circle">{index + 1}</div>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
