// Body.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';
import item1Image from '../Image/Images/item1.jpg';
import item2Image from '../Image/Images/item2.jpg';
import item3Image from '../Image/Images/item3.jpg';

const Body = () => {
  return (
    <div className="product-page">
      <div className="product-grid">
        {/* Item 1 */}
        <Link to="/product/1" className="product-link">
          <div className="product-card">
            <img src={item1Image} alt="Product 1" className="product-image" />
            <div className="product-details">
              <h3>Product 1</h3>
              <p>$19.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </Link>

        {/* Item 2 */}
        <Link to="/product/2" className="product-link">
          <div className="product-card">
            <img src={item2Image} alt="Product 2" className="product-image" />
            <div className="product-details">
              <h3>Product 2</h3>
              <p>$24.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </Link>

        {/* Item 3 */}
        <Link to="/product/3" className="product-link">
          <div className="product-card">
            <img src={item3Image} alt="Product 3" className="product-image" />
            <div className="product-details">
              <h3>Product 3</h3>
              <p>$29.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </Link>

       
      </div>
    </div>
  );
};

export default Body;
