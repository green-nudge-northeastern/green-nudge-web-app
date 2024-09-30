import React from 'react';
import './QuestionOptionsBlock.css'; // Custom styles for this component

// QuestionBlock to display the question and handle clicks
export const QuestionBlock = ({ question, category, selectedQuestion, handleQuestionClick }) => (
  <div className={`question-block ${selectedQuestion === category ? 'active' : ''}`}>
    <h2 onClick={() => handleQuestionClick(category)}>{question}</h2>
  </div>
);

// OptionsBlock to display the selectable options
export const OptionsBlock = ({ options, category, selectedOptions, handleOptionClick }) => (
  <div className="options-container">
    {options.map((option, index) => (
      <div
        key={index}
        className={`option-button ${selectedOptions.includes(option) ? 'selected' : ''}`}
        onClick={() => handleOptionClick(category, option)}
      >
        {option}
      </div>
    ))}
  </div>
);
