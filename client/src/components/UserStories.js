import React, { useRef } from 'react';
import './UserStories.css';
import snoopy from '../assets/img/Snoopy.png';
import ScrollableShowcase from './layout/ScrollableShowcase';

const UserStories = () => {
  const stories = [
    {
      title: "Story Title 1",
      description: "This is a brief description of the first user story.",
      image: snoopy
    },
    {
      title: "Story Title 2",
      description: "This is a brief description of the second user story.",
      image: snoopy
    },
    {
      title: "Story Title 3",
      description: "This is a brief description of the third user story.",
      image: snoopy
    },
    {
      title: "Story Title 4",
      description: "This is a brief description of the fourth user story.",
      image: snoopy
    },
    {
      title: "Story Title 5",
      description: "This is a brief description of the fifth user story.",
      image: snoopy
    }
  ];

  return (
    <ScrollableShowcase
    title="Welcome to the User Stories"
    items={stories}
    itemKeyPrefix="story"
    width="300"/>
  );
};

export default UserStories;