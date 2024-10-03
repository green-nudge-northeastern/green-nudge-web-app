import React from 'react';
import './HomePage.css';
import FadeInSection from '../components/layout/FadeInSection';
import shapes from '../assets/img/shapes_1000x1000.png';
import EmissionsGraph from '../components/graphs/ScenarioGraph';

function HomePage() {
  return (
    <div className="homepage">

      <FadeInSection
        imageSrc={shapes}
        heading="Discover a smarter way to source responsibly."
      >
        <p>
          Champion a resilient supply chain that maximizes efficiency while boldly seizing 
          market opportunities through sustainable innovation.
        </p>
      </FadeInSection>

      <FadeInSection
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
      </FadeInSection>

      <FadeInSection>
        <EmissionsGraph />
      </FadeInSection>




    </div>
  );
}

export default HomePage;
