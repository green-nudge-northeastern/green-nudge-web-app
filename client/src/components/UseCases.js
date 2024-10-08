import React from 'react';
import './UseCases.css';
import peanut from '../assets/img/peanut.jpg';
import ShowcaseCarousel from './layout/ShowcaseCarousel';


const useCases = [
  {
    title: "Use Case 1",
    description: "Brief description of the first use case.",
    image: peanut
  },
  {
    title: "Use Case 2",
    description: "Brief description of the second use case.",
    image: peanut
  },
  {
    title: "Use Case 3",
    description: "Brief description of the third use case.",
    image: peanut
  },
  {
    title: "Use Case 4",
    description: "Brief description of the fourth use case.",
    image: peanut
  },
  {
    title: "Use Case 5",
    description: "Brief description of the fifth use case.",
    image: peanut
  }
];

const UseCaseCard = ({ useCase }) => {
  return (
    <div>
      <img src={useCase.image} alt={useCase.title} className="use-case-card-image" />
      <h2>{useCase.title}</h2>
      <p>{useCase.description}</p>
    </div>
  );
};

const UseCases = () => {
  return (
    <ShowcaseCarousel title="Get Started" width="300">
      {useCases.map((useCase, index) => (
        <UseCaseCard key={index} useCase={useCase} />
      ))}
    </ShowcaseCarousel>
  );
};

export default UseCases;
