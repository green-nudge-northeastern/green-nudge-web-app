import React from 'react';
import './TrustedVendors.css';
import husky from '../../assets/img/husky.jpg';
import ShowcaseCarousel from './ShowcaseCarousel';
import { TiStarFullOutline } from "react-icons/ti";
import { FaTruckLoading } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";
import { FaEnvira } from "react-icons/fa";
import { RiVerifiedBadgeLine } from "react-icons/ri";



const vendors = [
  {
    title: "Vendor 1",
    description: "Brief description of the first vendor.",
    location: "Vancouver, BC",
    rating: 4.5,
    image: husky,
    vetted: true,
    products: ['cotton', 'silk', 'wool'],
    plans: 5,
  },
  {
    title: "Vendor 2",
    description: "Brief description of the second vendor.",
    location: "Toronto, ON",
    rating: 4.2,
    image: husky,
    vetted: true,
    products: ['cotton', 'wool'],
    plans: 3,
  },
  {
    title: "Vendor 3",
    description: "Brief description of the third vendor.",
    location: "Montreal, QC",
    rating: 4.8,
    image: husky,
    vetted: true,
    products: ['silk', 'wool'],
    plans: 2,
  },
  {
    title: "Vendor 4",
    description: "Brief description of the third vendor.",
    location: "Calgary, AB",
    rating: 4.6,
    image: husky,
    vetted: true,
    products: ['cotton', 'silk'],
    plans: 4,
  },
  {
    title: "Vendor 5",
    description: "Brief description of the third vendor.",
    location: "Halifax, NS",
    rating: 4.7,
    image: husky,
    vetted: true,
    products: ['cotton', 'silk', 'wool'],
    plans: 1,
  }

];


const VendorCard = ({ vendor }) => {
  return (
    <div className="vendor-card">
      <img src={vendor.image} alt={vendor.title} className="vendor-card-image" />
      <h2>{vendor.title}</h2>
      <p>{vendor.description}</p>
      <div className="vendor-card-metrics">
        <p><FaLocationDot
          className="vendor-icon"
          size={20}
          color="currentColor" /> {vendor.location}
        </p>
        {vendor.products && <p><FaTruckLoading
          className="vendor-icon"
          size={20}
          color="currentColor" /> {vendor.products.join(', ')}
        </p>}
        <p><FaEnvira
          className="vendor-icon"
          size={20}
          color="green" /> {vendor.plans} Reduction Plans
        </p>
        <p><TiStarFullOutline
          className="vendor-icon"
          size={20}
          color="gold" /> {vendor.rating}
        </p>
        <p>
          {vendor.vetted ? <RiVerifiedBadgeLine
            className="vendor-icon"
            size={20}
            color="green" /> : <MdPendingActions
            className="vendor-icon"
            size={20}
          />} Vetted
        </p>
      </div>
    </div>
  );
};

const TrustedVendors = () => {
  return (
    <ShowcaseCarousel title="Trusted Vendors" width="340">
      {vendors.map((vendor, index) => (
        <VendorCard key={index} vendor={vendor} />
      ))}
    </ShowcaseCarousel>
  );
};

export default TrustedVendors;