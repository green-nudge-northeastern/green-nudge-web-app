import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Select from 'react-select';
import './ScenarioGraph.css';
import { MaterialPairs, MaterialAnnualEmission } from '../../assets/data/MaterialAnnualEmission';
import { EnergyPairs, EnergyAnnualEmission } from '../../assets/data/EnergyAnnualEmission';
import ScenarioSummary from './ScenarioSummary';
import { ReactComponent as ScenarioIcon } from '../../assets/img/scenario-icon.svg';
import LoadingSpinner from '../ui/LoadingSpinner';


const EmissionsGraph = () => {
  const [strategy, setStrategy] = useState('material');
  const [sustainableOptions, setSustainableOptions] = useState([]);
  const [selectedSustainable, setSelectedSustainable] = useState(null);
  const [oldResource, setOldResource] = useState('');
  const [graphData, setGraphData] = useState([]);
  const [years, setYears] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state

  // Function to determine the old resource based on selected sustainable resource
  const getOldResource = (selected, pairs) => {
    for (let pair of pairs) {
      if (pair.includes(selected)) {
        return pair[0] === selected ? pair[1] : pair[0];
      }
    }
    return null; // return null if no match is found
  };

  useEffect(() => {
    // Determine which dataset and pairs to use based on strategy
    const emissionData = strategy === 'material' ? MaterialAnnualEmission : EnergyAnnualEmission;
    const pairs = strategy === 'material' ? MaterialPairs : EnergyPairs;

    // Retrieve the years dynamically from the dataset (keys of the dataset)
    const availableYears = Object.keys(emissionData);
    setYears(availableYears);


    // Set sustainable options dynamically based on pairs (second element of each pair)
    const sustainableResources = pairs.map(pair => pair[1]); // Second element in the pair is the sustainable resource

    const newOptions = sustainableResources.map((resource) => ({
      value: resource,
      label: resource,
    }));

    setSustainableOptions(newOptions);

    // Set default selections based on strategy
    const defaultSustainable = strategy === 'material' ? 'Recycled Polyester' : 'Energy-efficient HVAC';
    setSelectedSustainable(defaultSustainable);

    // Find corresponding old resource using the pairs array
    const defaultOldResource = getOldResource(defaultSustainable, pairs);
    setOldResource(defaultOldResource);

  }, [strategy]);

  useEffect(() => {
    // When sustainable resource or old resource changes, update the graph data
    if (selectedSustainable && oldResource) {
      const emissionData = strategy === 'material' ? MaterialAnnualEmission : EnergyAnnualEmission;
      const availableYears = Object.keys(emissionData);

      // Start loading spinner
      setIsLoading(true);

      setTimeout(() => {
        const selectedSustainableData = availableYears.map(year => parseFloat(emissionData[year][selectedSustainable] || 0));
        const oldResourceData = availableYears.map(year => parseFloat(emissionData[year][oldResource] || 0));

        setGraphData({
          data: [
            { 
              x: availableYears, 
              y: selectedSustainableData, 
              type: 'scatter', 
              mode: 'lines', 
              name: 'Total Emissions',
              line: { color: 'green', width: 3 },  // Set the color and line width
            },
            { 
              x: availableYears, 
              y: oldResourceData, 
              type: 'scatter', 
              mode: 'lines', 
              name: 'Business as Usual',
              line: { color: 'orange', width: 3 },  // Set the color and line width
            },
          ]
        });

        // Stop loading spinner after data is set
        setIsLoading(false);
      }, 200); // Simulate a delay for graph update
    }
  }, [selectedSustainable, oldResource, strategy]);

  useEffect(() => {
    // When sustainable resource changes, find the corresponding old resource
    if (selectedSustainable) {
      const pairs = strategy === 'material' ? MaterialPairs : EnergyPairs;
      const newOldResource = getOldResource(selectedSustainable, pairs);
      setOldResource(newOldResource);
    }
  }, [selectedSustainable, strategy]);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: 'transparent',
      display: 'flex',
      borderColor: 'transparent',
      boxShadow: 'none',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 'transparent',
        borderBottom: '2px solid #CAFFCA',
      },
    }),
    indicatorSeparator: (styles) => ({display:'none'}),
    dropdownIndicator: styles => ({ 
      ...styles, 
      color: 'orange',
      svg: {
        width: '35px',
        height: '35px',
        // strokeWidth: '1px',
      }
    })
  };

  const customStyles2 = {
    control: (provided) => ({
      ...provided,
      background: 'transparent',
      display: 'flex',
      borderColor: 'transparent',
      boxShadow: 'none',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 'transparent',
        borderBottom: '2px solid #CAFFCA',
      },
    }),
    indicatorSeparator: (styles) => ({display:'none'}),
    dropdownIndicator: styles => ({ 
      ...styles, 
      color: 'orange',
      svg: {
        width: '35px',
        height: '35px',
        // strokeWidth: '1px',
      }
    })
  };

  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      //after select dropdown option
      primary50: "gray",
      //Border and Background dropdown color
      primary: "#CAFFFA",
      //Background hover dropdown color
      primary25: "gray",
      //Background color
      neutral0: "black",
      //Border before select
      neutral20: "#CAFFCA",
      //No options color
      neutral40: "#CAFFCA",
      //scenario icon when click select
      neutral60: "#42FFDD",
      //Text color
      neutral80: "#48fc8c",
    },
  });

  return (
    <div>
      <div id="graph-title">
        <div id="graph-slogan">
          <span>Big picture made easy—</span>
        </div>

        <div className="description-container">
          <div className="description-strategy-select">
            <span className="strategy-prompt">See how </span>
            <Select
                styles={customStyles2}
                classNamePrefix="strategy-dropdown"
                theme={customTheme}
                options={[
                  { value: 'material', label: 'Material Innovation' },
                  { value: 'energy', label: 'Energy Efficiency' },
                ]}
                value={{ value: strategy, label: strategy === 'material' ? 'Material Innovation' : 'Energy Efficiency' }}
                onChange={(option) => setStrategy(option.value)}
                className="dropdown"
                isClearable={false}
                isSearchable={false}
            />
            <span className="strategy-prompt">can drive change.</span>
          </div>
          
          <div className="description-sustainable-select">
            <ScenarioIcon id="scenario-icon" />
            <div>
              <div className="flex-container">
                <span className="title-description">Model a scenario where I use </span>
                <Select
                  id="sustainable-dropdown"
                  theme={customTheme}
                  styles={customStyles}
                  options={sustainableOptions}
                  value={sustainableOptions.find(opt => opt.value === selectedSustainable)}
                  onChange={(option) => setSelectedSustainable(option.value)}
                  className="dropdown"
                  isClearable={false}
                  isSearchable={false}
                />
              </div>
              <span className="title-description">instead of </span>
              <span id="old-resource">{oldResource}</span>
              <span className="title-description"> in my supply chain:</span>
            </div> 
          </div>
        </div>
      </div>

      <div className="graph-container">

        <div className="plot-container" style={{ position: 'relative' }}>
          {isLoading && (
            <div className="loading-overlay">
              <LoadingSpinner />
            </div>
          )}
          <Plot
            id="emission-graph"
            data={graphData.data}
            layout={{
              title: {
                text: "Scenario Modelling for Your Net-Zero Transition",
                font: {
                  size: 20,
                  weight: 'bold',
                }
              },
              width: 600,
              height: 500,
              xaxis: {
                title: "Year",
                showgrid: true,
                gridcolor: 'lightgray',
              },
              yaxis: {
                title: "CO2 Emissions (in metric tons)",
                showgrid: true,
                gridcolor: 'lightgray',
              },
              plot_bgcolor: 'white',
              legend: {
                orientation: "h",
                yanchor: "bottom",
                y: 1.02,
                xanchor: "center",
                x: 0.5,
              },
              dragmode: false,
              font: {
                size: 15, // Set the global font size here
              },
            }}
            config={{
              displayModeBar: false,  // Disable the mode bar
              scrollZoom: false,      // Disable zooming with scroll
            }}
          />
        </div>

        <div id="summary-output" className="summary-container">
          <ScenarioSummary strategy={strategy} selectedSustainable={selectedSustainable} oldResource={oldResource} />
        </div>
      </div>
    </div>
  );
};

export default EmissionsGraph;
