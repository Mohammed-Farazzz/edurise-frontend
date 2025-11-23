import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";

function ContactPage() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("india");
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tabs data
  const tabs = ["india", "us", "singapore"];

  // Info content per region
  const info = {
    india: (
      <>
        <p><strong>EduRise Social Ventures India Pvt. Ltd.</strong></p>
        <p>Nextcoworks JP Nagar - Coworking Space, JP Nagar Alankar Plaza, BK Circle, Nayak Layout, 8th Phase, J. P. Nagar, Bangalore, Karnataka, India 560078</p>
        <p><strong>Email:</strong> <a href="mailto:feedback@edurise.in">feedback@edurise.in</a></p>
        <p><strong>Phone:</strong> <a href="tel:919916174848">+91 99161 74848</a></p>
      </>
    ),
    us: (
      <>
        <p><strong>EduRise USA Office</strong></p>
        <p>795 Folsom Street, 1st Floor, San Francisco, CA 94107</p>
        <p><strong>Email:</strong> <a href="mailto:us-support@edurise.org">us-support@edurise.org</a></p>
        <p><strong>Phone:</strong> <a href="tel:+14152349800">+1 (415) 234-9800</a></p>
      </>
    ),
    singapore: (
      <>
        <p><strong>EduRise Singapore Office</strong></p>
        <p>1 North Bridge Road, High Street Centre, Singapore 179094</p>
        <p><strong>Email:</strong> <a href="mailto:sg-support@edurise.org">sg-support@edurise.org</a></p>
        <p><strong>Phone:</strong> <a href="tel:+6591234567">+65 9123 4567</a></p>
      </>
    ),
  };

  return (
    <div className="contact-page">
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <div className="logo">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/99/05/35/1000_F_199053513_reNOz8CqNJx2zBxbhOUCTDpjcl3tb7CI.jpg"
              alt="EduRise Logo"
              style={{ height: "35px", verticalAlign: "middle" }}
            />
            <span style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px", color: "#a60059" }}>
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
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/code-of-practice">Code of Practice</Link>
            </li>
            <li>
              <Link to="/contact" className="active">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="login-dropdown" ref={dropdownRef}>
            <button type="button" onClick={() => setDropdownVisible(!dropdownVisible)}>
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
        </nav>
      </header>

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-text">
          <h2>Contact us</h2>
          <p>We are here to help you and answer any questions you may have. Here is how to reach us!</p>
        </div>
        <div className="contact-hero-img">
          <img src="/contact.png" alt="Contact Us Illustration" />
        </div>
      </section>

      {/* Tabs */}
      <div className="contact-tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="contact-details">
        <div className="info">{info[activeTab]}</div>
      </div>
    </div>
  );
}

export default ContactPage;
