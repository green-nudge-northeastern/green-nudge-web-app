import React, { useRef } from 'react';
import './TrustedVendors.css';
import husky from '../assets/img/husky.jpg';

const TrustedVendors = () => {
    const vendors = [
      {
        title: "Vendor 1",
        description: "This is a brief description of the first vendor.",
        location: "Vancouver, BC",
        rating: 4.5,
        image: husky,
        vetted: true,
        products:['cotton','silk','wool'],
      },
      {
        title: "Vendor 2",
        description: "This is a brief description of the second vendor.",
        location: "Toronto, ON",
        rating: 4.2,
        image: husky,
        vetted: true,
        products:['cotton','wool'],
      },
      {
        title: "Vendor 3",
        description: "This is a brief description of the third vendor.",
        location: "Montreal, QC",
        rating: 4.8,
        image: husky,
        vetted: true,
        products:['silk','wool'],
      },
      {
        title: "Vendor 4",
        description: "This is a brief description of the third vendor.",
        location: "Calgary, AB",
        rating: 4.6,
        image: husky,
        vetted: true,
        products:['cotton','silk'],
      },
      {
        title: "Vendor 5",
        description: "This is a brief description of the third vendor.",
        location: "Halifax, NS",
        rating: 4.7,
        image: husky,
        vetted: true,
        products:['cotton','silk','wool'],
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
      <div className="trusted-vendors">
        <h1>Trusted Vendors</h1>
        <div className="vendors-wrapper">
          <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
          <div className="vendors-container" ref={containerRef}>
            {vendors.map((vendor, index) => (
              <div key={index} className="vendors-card">
                <img src={vendor.image} alt={vendor.title} className="vendor-image" />
                <h2>{vendor.title}</h2>
                <p>{vendor.description}</p>
               {/* display the products */}
                <p>Products: {vendor.products.join(', ')}</p>
                <p>{vendor.location}</p>
                <p>Overall Rating: {vendor.rating}</p>

                {vendor.vetted ? <p>Vetted: ✅</p> : <p>Vetted: ❌</p>}
              </div>
            ))}
          </div>
          <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
        </div>
      </div>
    );
  };
  
  export default TrustedVendors;
  