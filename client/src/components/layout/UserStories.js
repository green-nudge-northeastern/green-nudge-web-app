import React from 'react';
import './UserStories.css';
import snoopy from '../../assets/img/Snoopy.png';
import ShowcaseCarousel from './ShowcaseCarousel';


const stories = [
  {
    title: "Story Title 1",
    description: "Brief description of the first user story.",
    image: snoopy
  },
  {
    title: "Story Title 2",
    description: "Brief description of the second user story.",
    image: snoopy
  },
  {
    title: "Story Title 3",
    description: "Brief description of the third user story.",
    image: snoopy
  },
  {
    title: "Story Title 4",
    description: "Brief description of the fourth user story.",
    image: snoopy
  },
  {
    title: "Story Title 5",
    description: "Brief description of the fifth user story.",
    image: snoopy
  }
];

const StoryCard = ({ story }) => {
  return (
    <div>
      <img src={story.image} alt={story.title} className="user-story-card-image" />
      <h2>{story.title}</h2>
      <p>{story.description}</p>
    </div>
  );
};

const UserStories = () => {
  return (
    <ShowcaseCarousel title="Explore Our User Stories" width="300">
      {stories.map((story, index) => (
        <StoryCard key={index} story={story} />
      ))}
    </ShowcaseCarousel>
  );
};

export default UserStories;
