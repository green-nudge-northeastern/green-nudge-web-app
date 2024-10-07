import React, { useRef, useEffect } from 'react';
import './ScrollableShowcase.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdPendingActions } from "react-icons/md";


const ScrollableShowcase = ({ title, items, itemKeyPrefix, width }) => {
  const containerRef = useRef(null);
  const gap = 20; // Gap between cards
  const cardWidth = parseInt(width, 10);

  // Clone the items to simulate infinite scrolling
  const clonedItems = [...items, ...items];

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
  };

  // Infinite scroll logic
  const handleScroll = () => {
    const container = containerRef.current;
    if (container.scrollLeft <= 0) {
      // If user scrolls too far left, move to the center
      container.scrollLeft = container.scrollWidth / 2 - container.offsetWidth;
    } else if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      // If user scrolls too far right, move back to the center
      container.scrollLeft = container.scrollWidth / 2 - container.offsetWidth;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    // Start scrolling from the middle
    container.scrollLeft = container.scrollWidth / 2 - container.offsetWidth;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scrollable-showcase">
      <h1>{title}</h1>
      <div className="showcase-wrapper">
        {/* Replace the scroll buttons with icons */}
        <button className="scroll-button left" onClick={scrollLeft}>
          <IoIosArrowBack size={80} />
        </button>
        <div className="showcase-container" ref={containerRef}>
          {clonedItems.map((item, index) => (
            <div
              key={`${itemKeyPrefix}-${index}`}
              className="showcase-card"
              style={{ minWidth: `${width}px` }} /* Dynamic width for cards */
            >
              <img src={item.image} alt={item.title} className="showcase-image" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {/* Additional properties specific to Trusted Vendors */}
              {item.products && <p>Products: {item.products.join(', ')}</p>}
              {item.location && <p>{item.location}</p>}
              {item.rating && <p>Overall Rating: {item.rating}</p>}
              {item.vetted !== undefined && (
                <p>Vetted: {item.vetted ? <IoMdCheckmarkCircleOutline size={20} color="green" /> : <MdPendingActions size={20}/>}</p>
              )}
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          <IoIosArrowForward size={80} />
        </button>
      </div>
    </div>
  );
};

export default ScrollableShowcase;
