import React from 'react';
import './HomePage.css';
import FadeInSection from '../components/layout/FadeInSection';
import shapes from '../assets/img/shapes_1000x1000.png';
import EmissionsGraph from '../components/graphs/ScenarioGraph';
import SupplyChainNetwork from '../components/ui/SupplyChainNetwork';
import HowItWorks from '../components/ui/HowItWorks';
import { BiArrowToTop } from "react-icons/bi";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage">
      {/* Section 1 (Home/Intro) */}
      <section id="about">
        <FadeInSection
          imageSrc={shapes}
          heading="Discover a smarter way to source responsibly."
          style={{ width: '1200px' }}
        >
          <p>
            Champion a resilient supply chain that maximizes efficiency while boldly seizing 
            market opportunities through sustainable innovation.
          </p>
        </FadeInSection>


        <FadeInSection
          textAlign='center'
          style={{ width: '900px' }}
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
          <SupplyChainNetwork />
        </FadeInSection>
      </section>

      {/* Section 2 (Scenario Section) */}
      <section id="demos">
        <FadeInSection>
          <EmissionsGraph />
        </FadeInSection>
      </section>

      {/* Section 3 (How It Works) */}
      <section id="howItWorks">
        <FadeInSection>
          <HowItWorks />
        </FadeInSection>
      </section>

      {/* Section 4 (Join Us) */}
      <section id="joinUs">
        <FadeInSection
          textAlign='center'
          style={{ width: '900px' }}
        >
        <h1>
          Let's build a
          <span className="slogan-highlight"> sustainability arm </span>
          for your company together
        </h1>
        <div className="join-us">
          <Link to="/login">
            <button className="login-button">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button">Sign Up</button>
          </Link>
        </div>
        {/* back to top */}
        <a href="#about" className="back-to-top"> <BiArrowToTop className="back-to-top-icon" size={45}/> Back to Top</a>
        </FadeInSection>
      </section>
    </div>
  );
}

export default HomePage;
