import React from "react";
import Image from "next/image";
import iceOne from "@/assets/iceOne.png";
import iceTwo from "@/assets/iceTwo.png";
import iceThree from "@/assets/iceThree.png";
import iceFour from "@/assets/iceFour.png";
import iceFive from "@/assets/iceFive.png";
import iceSix from "@/assets/iceSix.png";
import iceSeven from "@/assets/iceSeven.png";
import iceEight from "@/assets/iceEight.png";
import "@/styles/Flavors.css";

const ProductCard = () => {
  const classicProducts = [
    {
      id: 1,
      name: "Chocolate Brownie Sundae",
      description: "Rich chocolate ice cream with chunks of brownie.",
      price: "$5.49",
      image: iceOne,
    },
    {
      id: 2,
      name: "Strawberry Shortcake",
      description: "Strawberry ice cream layered with shortcake.",
      price: "$5.29",
      image: iceTwo,
    },
    {
      id: 3,
      name: "Mint Chocolate Chip Cone",
      description: "Refreshing mint ice cream with chocolate chips.",
      price: "$3.99",
      image: iceThree,
    },
    {
      id: 4,
      name: "Classic Vanilla Ice Cream",
      description: "Creamy vanilla ice cream topped with cherry.",
      price: "$4.99",
      image: iceFour,
    },
  ];

  const bestSellers = [
    {
      id: 5,
      name: "Chocolate Chip Cookie Cone",
      description: "Chocolate chip cookie dough ice cream in a cone.",
      price: "$5.79",
      image: iceFive,
    },
    {
      id: 6,
      name: "Rocky Road Sundae",
      description: "Marshmallow and nutty rocky road ice cream",
      price: "$5.99",
      image: iceSix,
    },
    {
      id: 7,
      name: "Peach Melba Sundae",
      description: "Peach ice cream topped with raspberry sauce",
      price: "$4.89",
      image: iceSeven,
    },
    {
      id: 8,
      name: "Strawberry Sundae",
      description: "Strawberry ice cream with fresh strawberries",
      price: "$6.49",
      image: iceEight,
    },
  ];

  return (
    <div className="product-card-container">
      <h1 className="section-title">
        Our <span className="highlight">Classic</span> Favorites
      </h1>
      <p className="section-subtitle">
        Check out our top products that our customers love.
      </p>

      {/* Classic Favorites Section */}
      <div className="product-grid">
        {classicProducts.map((product) => (
          <div key={product.id} className="product-card">
            {/* Product Image */}
            <div className="product-image classic-bg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="image-content"
              />
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Best Sellers Section */}
      <h1 className="section-title">
        Our <span className="highlight">Best</span> Seller
      </h1>
      <p className="section-subtitle">
        Discover the favorites that keep our customers coming back for more.
      </p>

      <div className="product-grid">
        {bestSellers.map((product) => (
          <div key={product.id} className="product-card">
            {/* Product Image */}
            <div className="product-image best-seller-bg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="image-content"
              />
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
