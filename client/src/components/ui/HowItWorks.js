import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="howitworks-container">
      <h1 className="howitworks-heading">How it works?</h1>
      <div className="howitworks-steps-container">
        <div className="howitworks-step">
          <div className="howitworks-step-number">
            <span>1</span>
          </div>
          <div className="howitworks-step-content">
            <h3 className="howitworks-step-title">Launch a decarbonization program using an Assessment Toolkit</h3>
            <p className="howitworks-step-description">Quick snapshot of what’s possible</p>
          </div>
        </div>

        <div className="howitworks-step">
          <div className="howitworks-step-number">
            <span>2</span>
          </div>
          <div className="howitworks-step-content">
            <h3 className="howitworks-step-title">Model a scenario for your company</h3>
            <p className="howitworks-step-description">Create scenarios to visualize emission reduction pathways and key metrics so you can commit with ease and confidence</p>
          </div>
        </div>

        <div className="howitworks-step">
          <div className="howitworks-step-number">
            <span>3</span>
          </div>
          <div className="howitworks-step-content">
            <h3 className="howitworks-step-title">Execute Sustainable Procurement Framework</h3>
            <p className="howitworks-step-description">Efficiently collaborate and explore new innovative solution marketplace of vetted partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
