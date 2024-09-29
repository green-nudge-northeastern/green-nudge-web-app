import React from 'react';
import './HomePage.css';
import HomeSection from '../components/layout/HomeSection';
import shapes from '../assets/shapes_1000x1000.png';

function HomePage() {
  return (
    <div className="homepage">

      <HomeSection
        imageSrc={shapes}
        heading="Discover a smarter way to source responsibly."
      >
        <p>
          Champion a resilient supply chain that maximizes efficiency while boldly seizing 
          market opportunities through sustainable innovation.
        </p>
      </HomeSection>

      <HomeSection
        textAlign='center'
      >
        <h2>
          Imagine a world where taking action is as smooth as a swipe on your phone—that's our vision.
        </h2>
        <h2>
          We help eliminate friction and streamline processes for all ecosystem partners <br/>
          'Do <span className="slogan-highlight">more</span> with 
          <span className="slogan-highlight"> less</span>'
        </h2>
      </HomeSection>

    </div>
  );
}

export default HomePage;
