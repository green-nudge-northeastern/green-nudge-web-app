import React, { useEffect, useState } from 'react';
import { getSummary } from '../../services/scenarioUtils'; // Utility function to calculate summary
import { MaterialSummary } from '../../assets/data/MaterialSummary';
import { EnergySummary } from '../../assets/data/EnergySummary';
import { MaterialPairs } from '../../assets/data/MaterialAnnualEmission';
import { EnergyPairs } from '../../assets/data/EnergyAnnualEmission';
import './ScenarioSummary.css';
import LoadingSpinner from '../ui/LoadingSpinner';

const ScenarioSummary = ({ strategy, selectedSustainable, oldResource }) => {
    const [summary, setSummary] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // New loading state

    useEffect(() => {
        // Reset summary and set loading state to true whenever inputs change
        setSummary(null);
        setIsLoading(true);

        // Determine which pairs to use based on the strategy
        const pairs = strategy === 'material' ? MaterialPairs : EnergyPairs;

        // Function to check if selectedSustainable and oldResource form a valid pair for the strategy
        const isValidPair = (selectedSustainable, oldResource) => {
            return pairs.some(pair =>
                (pair[0] === oldResource && pair[1] === selectedSustainable) ||
                (pair[1] === oldResource && pair[0] === selectedSustainable)
            );
        };

        // Check if selectedSustainable and oldResource are valid for the strategy
        if (!selectedSustainable || !oldResource || !isValidPair(selectedSustainable, oldResource)) {
            console.log('Waiting for valid selectedSustainable or oldResource...');
            return; // Exit the effect early if values are not ready or not valid
        }
        // Determine which summary data to use based on the strategy
        const summaryData = strategy === 'material' ? MaterialSummary : EnergySummary;

        // Simulate some delay for updating/loading the summary (if necessary)
        setTimeout(() => {
            // Calculate the summary using the utility function
            const summaryDict = getSummary(summaryData, oldResource, selectedSustainable);
            setSummary(summaryDict);
            setIsLoading(false);
        }, 200);

    }, [strategy, selectedSustainable, oldResource]);

    return (
        <div className="summary-container">
          {isLoading || !summary ? ( // Show loading if isLoading is true or summary is null
            <LoadingSpinner color="#3a9e26" />
          ) : (
            Object.keys(summary).map((metric) => (
              <div key={metric} className="summary-metric-container">
                {metric === "Annual Spend" ? (
                  <div>
                    <div className="summary-number">$ {summary[metric]}</div>
                    <span className="summary-description">Annual Spend</span>
                  </div>
                ) : (
                  <div>
                    <div className="summary-number">{summary[metric]}%</div>
                    <span className="summary-description">less {metric}</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      );
      
};

export default ScenarioSummary;
