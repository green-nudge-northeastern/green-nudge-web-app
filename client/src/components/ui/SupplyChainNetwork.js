import React from 'react';
import './SupplyChainNetwork.css'; // Custom CSS for the network graph
import { ReactComponent as UserIcon } from '../../assets/img/supply-chain-user.svg'; // Import user SVG
import { ReactComponent as BrandIcon } from '../../assets/img/supply-chain-brand.svg'; // Import brand SVG
import { ReactComponent as SupplierIcon } from '../../assets/img/supply-chain-supplier.svg'; // Import supplier SVG
import { ReactComponent as ManufacturerIcon } from '../../assets/img/supply-chain-manufacturer.svg'; // Import manufacturer SVG
import { ReactComponent as RetailerIcon } from '../../assets/img/supply-chain-retailer.svg'; // Import retailer SVG


// source of the SVG icons: www.svgrepo.com (open-licensed)
function SupplyChainNetwork() {
  return (
    <div className="network-container">

      <div className="network-column network-left">
        <div className="network-element-container supplier-container">
          <div className="element-name name-top"> <span>Suppliers</span> </div>
          <div className="circle suppliers">
            <SupplierIcon className="icon" />
          </div>
        </div>
        <div className="network-element-container retailer-container">
          <div className="element-name name-bottom"> <span>Retailers</span> </div>
          <div className="circle retailers">
            <RetailerIcon className="icon" />
          </div>
        </div>
      </div>

      <div className="network-column network-center">
        <div className="circle user">
          <UserIcon className="icon" />
        </div>

        <div className="line supplier"></div>
        <div className="line retailer"></div>
        <div className="line manufacturer"></div>
        <div className="line brand"></div>
      </div>

      <div className="network-column network-right">

        <div className="network-element-container manufacturer-container">
          <div className="circle manufacturers">
          <ManufacturerIcon className="icon" />
          </div>
          <div className="element-name name-top"> <span>Manufacturers</span> </div>
        </div>
        <div className="network-element-container brand-container">
          <div className="circle brands">
            <BrandIcon className="icon" />
          </div>
          <div className="element-name name-bottom"> <span>Brands</span> </div>
        </div>
      </div>

    </div>
  );
}

export default SupplyChainNetwork;
