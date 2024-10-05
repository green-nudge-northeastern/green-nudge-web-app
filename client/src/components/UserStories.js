import React, { useRef } from 'react';
import './UserStories.css';
import snoopy from '../assets/img/Snoopy.png';

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

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="user-stories">
      <h1>Welcome to the User Stories</h1>
      <div className="stories-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div className="stories-container" ref={containerRef}>
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <img src={story.image} alt={story.title} className="story-image" />
              <h2>{story.title}</h2>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default UserStories;
