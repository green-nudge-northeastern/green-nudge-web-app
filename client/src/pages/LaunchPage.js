import React, { useState } from 'react';
import './LaunchPage.css'; // Custom styles for the page
import { QuestionBlock, OptionsBlock } from '../components/forms/QuestionOptionsBlock'; // Import both components
import questionsOptionsData from '../assets/data/LaunchSurvey'; 


const LaunchPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null); // State to track the selected question
  const [selectedOptions, setSelectedOptions] = useState({}); // State to track selected options for each category

  // Handles when a question is clicked
  const handleQuestionClick = (category) => {
    setSelectedQuestion(category === selectedQuestion ? null : category); // Toggle the question selection
  };

  const handleOptionClick = (category, option) => {
    setSelectedOptions((prevSelected) => {
      const newSelected = prevSelected[category]?.includes(option)
        ? prevSelected[category].filter((item) => item !== option)
        : [...(prevSelected[category] || []), option];

      return { ...prevSelected, [category]: newSelected };
    });
  };

  return (
    <div className="launch-page">
      <h1 className="launch-title">Launch a decarbonization program for you!</h1>
      <div className="launch-grid">
        {/* add a panel for switching between previous and next question */}

        {/* all questions */}
        <div className="launch-questions">
          {questionsOptionsData.map(({ question, category }) => (
            <QuestionBlock
              key={category}
              question={question}
              category={category}
              selectedQuestion={selectedQuestion}
              handleQuestionClick={handleQuestionClick}
            />
          ))}
        </div>

        {/* all options for the selected question */}
        <div className="launch-options">
            <p className="launch-options-description">
                Select all that apply. <br />
                The more we know, the better insights you'll receive.
            </p>
          {questionsOptionsData
            .filter(({ category }) => category === selectedQuestion)
            .map(({ category, options }) => (
              <OptionsBlock
                key={category}
                options={options}
                category={category}
                selectedOptions={selectedOptions[category] || []}
                handleOptionClick={handleOptionClick}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;
