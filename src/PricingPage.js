import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PricingPage.css";

function PricingPage() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="pricing-wrapper">
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <div className="logo">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/99/05/35/1000_F_199053513_reNOz8CqNJx2zBxbhOUCTDpjcl3tb7CI.jpg"
              alt="EduRise Logo"
              style={{ height: "35px", verticalAlign: "middle" }}
            />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "10px",
                color: "#a60059",
              }}
            >
              EduRise
            </span>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li className="active">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/code-of-practice">Code of Practice</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Desktop Login Dropdown */}
          <div className="login-dropdown desktop-only" ref={dropdownRef}>
            <button onClick={() => setDropdownVisible(!dropdownVisible)}>
              Login ⯆
            </button>
            <div
              className="dropdown-content"
              style={{ display: dropdownVisible ? "block" : "none" }}
            >
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
        </nav>
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
        <div className="hero-left">
          <img
            src="https://images.indianexpress.com/2019/12/student-759-1.jpg"
            alt="Helping People"
          />
        </div>
        <div className="hero-right">
          <h2>FREE FUNDRAISING FOR ALL!</h2>
          <h1>
            0 % <span>PLATFORM FEES</span>
          </h1>
          <p>
            RAISE MAXIMUM FUNDS FOR THE CAUSE YOU
            <br />
            CARE ABOUT
          </p>
          <button className="hero-btn">
            <Link
              to="/register"
              style={{ color: "#8b1c42", textDecoration: "none" }}
            >
              Start a fundraiser
            </Link>
          </button>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="calculator">
        <h2>Fundraiser goal calculator</h2>
        <p>A simple way to plan and achieve your fundraiser goal</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EduRise Donation Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PricingPage;

