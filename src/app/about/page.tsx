import Image from 'next/image';
import AboutIceImg from "@/assets/AboutIceImg.png";
import "@/styles/About.css"; 

export default function About() {
  return (
    <section className="about-section">
      {/* Left Image Section */}
      <div className="about-image-container">
        <Image
          src={AboutIceImg}
          alt="Ice cream"
          width={360} 
          height={460} 
          className="about-image"
        />
      </div>

      {/* Right Text Section */}
      <div className="about-text-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          At The Ice Cream Shop, we believe in the joy of indulging in the finest ice cream. Each scoop is crafted with love and care, using the best ingredients to create rich, creamy flavors that will delight your taste buds. Our mission is to bring smiles to every customer with our wide variety of unique and classic ice cream flavors.
        </p>
        <p className="about-description">
          With over 20 years of experience, we continue to innovate, offering both traditional and exciting new flavors that create unforgettable experiences for every ice cream lover.
        </p>
      </div>
    </section>
  );
}
