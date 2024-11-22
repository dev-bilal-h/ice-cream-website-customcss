import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Heading */}
        <h2 className="footer-heading">
          <span className="footer-heading-black">Cloudy</span>{" "}
          <span className="footer-heading-pink">Cones</span>
        </h2>

        {/* Top Section: Links */}
        <div className="footer-links">
          <div>
            <h3 className="footer-section-title">Menu</h3>
            <ul>
              <li className="footer-link">Flavors</li>
              <li className="footer-link">Specials</li>
              <li className="footer-link">Custom Cones</li>
              <li className="footer-link">Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-section-title">About Us</h3>
            <ul>
              <li className="footer-link">Our Story</li>
              <li className="footer-link">Locations</li>
              <li className="footer-link">Careers</li>
              <li className="footer-link">Sustainability</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-section-title">Customer Support</h3>
            <ul>
              <li className="footer-link">Contact Us</li>
              <li className="footer-link">FAQs</li>
              <li className="footer-link">Order Tracking</li>
              <li className="footer-link">Feedback</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-section-title">Offers & Deals</h3>
            <ul>
              <li className="footer-link">Seasonal Offers</li>
              <li className="footer-link">Membership</li>
              <li className="footer-link">Discounts</li>
              <li className="footer-link">Partner Programs</li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Social Media Icons */}
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Cloudy Cones All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
