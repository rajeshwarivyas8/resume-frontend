import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/"); // pehle home page pe jao
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">

        {/* Logo */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            ResumeVita.
          </Link>
        </div>

        {/* Center Links */}
        <div className="nav-center">
          <button onClick={() => handleScroll("home")}>Home</button> <button onClick={() => handleScroll("features")}>Features</button> <button onClick={() => handleScroll("testimonials")}>Testimonials</button> <button onClick={() => handleScroll("contact")}>Contact</button>
        </div>

        {/* Right Buttons */}
        <div className="nav-right">
          <Link to="/signup">
            <button className="btn-outline">Login</button>
          </Link>

          <Link to="/signup">
            <button className="btn-solid">Get Started</button>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;




