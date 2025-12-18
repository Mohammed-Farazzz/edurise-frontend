import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CodeOfPracticePage.css";

function CodeOfPracticePage() {
  // State for dropdown
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Code of Practice content (same as your HTML)
  const commitments = [
    {
      icon: "👤",
      title: "Dignified Storytelling",
      text: "Uphold the dignity of the individuals and families whose stories are shared",
    },
    {
      icon: "❤️",
      title: "Voluntary Giving",
      text: "Avoid inducing guilt or shame in donors—the choice to give must always remain voluntary and respected",
    },
    {
      icon: "💬",
      title: "Transparent Communication",
      text: "Ensure donors are provided with clear, complete, and respectful information to make informed decisions",
    },
  ];

  return (
    <div className="cop-page">
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
              <Link to="/code-of-practice" className="active">
                Code of Practice
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          {/* Desktop Login Dropdown */}
          <div className="login-dropdown desktop-only" ref={dropdownRef}>
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

      {/* Main Code of Practice Section */}
      <section className="code-container">
        <h1>Our Commitment to Ethical Fundraising</h1>
        <p>
          In 2014, we witnessed a quiet shift in how people turned to their communities for help.
          As crowdfunding has grown, so too have the ethical questions around how we tell these stories.
          As a platform we are committed towards the following
        </p>

        <div className="cards">
          {commitments.map((commitment, index) => (
            <div key={index} className="card">
              <div className="icon">{commitment.icon}</div>
              <h3>{commitment.title}</h3>
              <p>{commitment.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CodeOfPracticePage;
