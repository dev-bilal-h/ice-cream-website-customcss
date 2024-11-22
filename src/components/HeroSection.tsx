import React from 'react';
import HeroImage from "@/assets/HeroImage.png";
import Image from 'next/image';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Image Section */}
        <div className="hero-image">
          <div className="image-wrapper">
            <Image
              src={HeroImage}
              alt="Ice Cream Cone"
              className="image"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to <br />
            <span className="highlight">ICE CREAM SHOP</span>
          </h1>
          <p className="hero-description">
            Indulge in a world of delightful flavors and savor the creamy bliss of ice 
            cream made just for you. Every scoop is a perfect blend of freshness, sweetness, and joy.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="primary-button">
              Order Now
            </button>
            <button className="secondary-button">
              More Flavors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
