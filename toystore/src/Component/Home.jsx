import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homecss.css'; // Import the corresponding CSS file
import './Body';

// Import your images
import item1Image from '../Image/Images/item1.jpg';
import item2Image from '../Image/Images/item2.jpg';
import item3Image from '../Image/Images/item3.jpg';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality based on the searchQuery
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="home">
      <header>
        <h1>Welcome to the Toy Store</h1>
      </header>
      {/* Search bar above special offers */}
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      <section className="offer-items">
        <h2>Special Offers</h2>
        <div className="item-list">
          {/* Item 1 */}
          <Link to="/Body" className="item-card">
            <img src={item1Image} alt="Offer 1" />
            <div className="item-details">
              <h3>Offer 1</h3>
              <p>$14.99</p>
            </div>
          </Link>

          {/* Item 2 */}
          <Link to="/Body" className="item-card">
            <img src={item2Image} alt="Offer 2" />
            <div className="item-details">
              <h3>Offer 2</h3>
              <p>$19.99</p>
            </div>
          </Link>

          {/* Item 3 */}
          <Link to="/Body" className="item-card">
            <img src={item3Image} alt="Offer 3" />
            <div className="item-details">
              <h3>Offer 3</h3>
              <p>$24.99</p>
            </div>
          </Link>

          {/* Add more offer items as needed */}
        </div>
      </section>
      {/* Add more sections for kids and gamers as needed */}
    </div>
  );
};

export default Home;
