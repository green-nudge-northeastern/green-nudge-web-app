import React, { useRef } from 'react';
import './UseCases.css';
import peanut from '../assets/img/peanut.jpg';
import ScrollableShowcase from './layout/ScrollableShowcase';

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

  return (
    <ScrollableShowcase title="Get Started" items={useCases} itemKeyPrefix="useCase" width="300"/>
  );
};

export default UseCases;
