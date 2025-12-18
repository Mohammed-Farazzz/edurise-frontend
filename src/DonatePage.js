import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DonatePage.css";

const Donate = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div onClick={closeDropdown}>
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
              <Link to="/donate" className="active">
                Donate
              </Link>
            </li>
            <li>
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
          <div className="login-dropdown desktop-only" onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleDropdown}>Login ⯆</button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
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
      <section className="donate-hero">
        <h2>Thousands are crowdfunding for various causes.</h2>
        <p>Support a fundraiser today.</p>
      </section>

      {/* Donation Cards */}
      <section className="donate-grid">
        {/* Card 1 */}
        <div className="donate-card">
          <img
            src="https://images.indianexpress.com/2019/12/student-759-1.jpg"
            alt="Student 1"
          />
          <div className="donate-content">
            <h4>Help Aditi complete her studies</h4>
            <p className="progress">Raised ₹38,000 / ₹50,000</p>
            <p className="amount">Created by: Ramesh Kumar</p>
            <Link to="/register">
              <button>Donate</button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="donate-card">
          <img
            src="https://img.freepik.com/premium-photo/young-indian-boy-primary-school-wearing-his-school-uniform-smile-carries-his-backpack_1037914-132.jpg"
            alt="Student 2"
          />
          <div className="donate-content">
            <h4>Support Raman's School Fund</h4>
            <p className="progress">Raised ₹61,000 / ₹61,000</p>
            <p className="amount">Created by: Nazmin Bano</p>
            <Link to="/register">
              <button>Donate</button>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="donate-card">
          <img
            src="https://img.freepik.com/premium-photo/cute-indian-little-school-boy-uniform_601128-4671.jpg?w=2000"
            alt="Student 3"
          />
          <div className="donate-content">
            <h4>Help Ravi with Uniform & Books</h4>
            <p className="progress">Raised ₹12,000 / ₹25,000</p>
            <p className="amount">Created by: Neha Sharma</p>
            <Link to="/register">
              <button>Donate</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

