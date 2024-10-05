import React, { useRef } from 'react';
import './UseCases.css';
import peanut from '../assets/img/peanut.jpg';

const UseCases = () => {
  const useCases = [
    {
      title: "Use Case 1",
      description: "This is a brief description of the first use case.",
      image: peanut
    },
    {
      title: "Use Case 2",
      description: "This is a brief description of the second use case.",
      image: peanut
    },
    {
      title: "Use Case 3",
      description: "This is a brief description of the third use case.",
      image: peanut
    },
    {
      title: "Use Case 4",
      description: "This is a brief description of the fourth use case.",
      image: peanut
    },
    {
      title: "Use Case 5",
      description: "This is a brief description of the fifth use case.",
      image: peanut
    }
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="use-cases">
      <h1>This is the Use Cases Component</h1>
      <div className="cases-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div className="cases-container" ref={containerRef}>
          {useCases.map((useCase, index) => (
            <div key={index} className="case-card">
              <img src={useCase.image} alt={useCase.title} className="case-image" />
              <h2>{useCase.title}</h2>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default UseCases;
