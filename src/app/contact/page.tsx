import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "@/styles/Contact.css";

export default function Contact() {
    return (
        <div id="contact">
            <div className="contact-wrapper">
                <h2 className="contact-title">Contact</h2>
                <div className="contact-grid">
                    {/* Contact Form */}
                    <div className="card contact-form">
                        <h3>Get in Touch</h3>
                        <form>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                            />

                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />

                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Write your message"
                            ></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="card contact-info">
                        <h3>Contact Info</h3>
                        <p>
                            Feel free to reach out with any questions or to
                            share your favorite ice cream moments!
                        </p>
                        <ul>
                            <li>
                                <span>Address:</span>
                                <p>123 Sweet Lane, Dessert Town, 12345</p>
                            </li>
                            <li>
                                <span>Phone:</span>
                                <p>+123 456 789</p>
                            </li>
                            <li>
                                <span>Email:</span>
                                <p>hello@icecreamdelight.com</p>
                            </li>
                        </ul>
                        <div className="social-links">
                            <a href="#">
                                <FaFacebook />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <FaTwitter />
                            </a>
                            <a href="#">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
