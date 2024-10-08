import React, { useRef } from 'react';
import './TrustedVendors.css';
import husky from '../assets/img/husky.jpg';
import ShowcaseCarousel from './layout/ShowcaseCarousel';

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
  
    return (
      <ShowcaseCarousel title="Trusted Vendors" items={vendors} itemKeyPrefix="vendor" width="350"/>
    );
  };
  
  export default TrustedVendors;