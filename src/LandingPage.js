import React, { useState, useRef, useEffect } from 'react';
import './LandingPage.css'; // We'll make this CSS next
import { Link } from "react-router-dom";


function LandingPage() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="landing-page">
      {/* Header/Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src="https://as2.ftcdn.net/v2/jpg/01/99/05/35/1000_F_199053513_reNOz8CqNJx2zBxbhOUCTDpjcl3tb7CI.jpg" alt="EduRise Logo" style={{ height: '35px', verticalAlign: 'middle' }} />
          <span style={{ fontWeight: 'bold', fontSize: '20px', marginLeft: '10px', color: '#a60059' }}>EduRise</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/code-of-practice">Code of Practice</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Desktop Login Dropdown */}
        <div className="login-dropdown desktop-only" ref={dropdownRef}>
          <button onClick={() => setDropdownVisible(!dropdownVisible)}>Login ⯆</button>
          <div className="dropdown-content" style={{ display: dropdownVisible ? 'block' : 'none' }}>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>Donate</Link>
        <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
        <Link to="/code-of-practice" onClick={() => setMobileMenuOpen(false)}>Code of Practice</Link>
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
        <Link to="/register" onClick={() => setMobileMenuOpen(false)}>Register</Link>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 style={{ color: "#333", fontWeight: 700, marginBottom: "12px" }}>
            Raise Hope with <span style={{ color: "#b8005c" }}>Trust</span> and <span style={{ color: "#b8005c" }}>Transparency</span>
          </h1>

          <p>
            Help us support underprivileged students by connecting kind donors like you.
            Your contribution helps shape futures.
          </p>
          <Link to="/register" className="cta-btn">Donate Now</Link>

        </div>
        <div className="hero-image">
          <img src="https://images.indianexpress.com/2019/12/student-759-1.jpg" alt="Students" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EduRise Donation Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
