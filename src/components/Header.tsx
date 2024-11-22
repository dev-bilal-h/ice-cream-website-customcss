"use client";

import Link from "next/link";
import { useState } from "react";
import '../styles/Header.css';  

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            {/* LOGO CONTENT */}
            <div className="logo">
                <h2>
                    Cloudy <span className="highlight">Cones</span>
                </h2>
            </div>

            {/* LINK MENU for Desktop */}
            <nav className="navLinks desktopOnly">
                <Link href="/">Home</Link>
                <Link href="/flavors">Flavors</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            {/* MENU CONTENT FOR MOBILE */}
            <div className="mobileMenu">
                <button className="menuButton" onClick={toggleMenu}>
                    ☰
                </button>
                {isMenuOpen && (
                    <div className="menuContent">
                        <button className="closeButton" onClick={toggleMenu}>
                            ✖
                        </button>
                        <ul>
                            <li>
                                <Link href="/" onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/flavors" onClick={toggleMenu}>
                                    Flavors
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={toggleMenu}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={toggleMenu}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
