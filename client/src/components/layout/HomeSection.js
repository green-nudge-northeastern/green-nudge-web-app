import React, { useEffect } from 'react';
import './HomeSection.css';  // Styles for the section

function HomeSection({ imageSrc, heading, children, textAlign = 'left' }) {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);  // Unobserve after it has been revealed
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();  // Cleanup observer when component unmounts
  }, []);

  return (
    <section className="section reveal content-section">
      {imageSrc && <img src={imageSrc} alt="Section Image" className="section-image" />}
      <div className="section-text" style={{ textAlign }}> 
        {heading && <h1>{heading}</h1>} 
        {children}
      </div>
    </section>
  );
}

export default HomeSection;
