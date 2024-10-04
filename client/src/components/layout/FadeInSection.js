import React, { useEffect } from 'react';
import './FadeInSection.css';  // Styles for the section

function FadeInSection({ imageSrc, heading, children, textAlign = 'left', style }) {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');  // Remove class when scrolled out of view
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();  // Cleanup observer when component unmounts
  }, []);

  return (
    <section className="section reveal content-section" style={style}>
      {imageSrc && <img src={imageSrc} alt="Section Image" className="section-image" />}
      <div className="section-text" style={{ textAlign }}> 
        {heading && <h1>{heading}</h1>} 
        {children}
      </div>
    </section>
  );
}

export default FadeInSection;
