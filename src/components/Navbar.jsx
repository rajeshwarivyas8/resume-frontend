import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false);   // added

  const navigate = useNavigate();

  const handleScroll = (id) => {

    setMenuOpen(false);   // added (close menu after click)

    if (window.location.pathname !== "/") {
      navigate("/");

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

        <div className={menuOpen ? "nav-center active" : "nav-center"}>

          <button onClick={() => handleScroll("home")}>Home</button>

          <button onClick={() => handleScroll("features")}>Features</button>

          <button onClick={() => handleScroll("testimonials")}>Testimonials</button>

          <button onClick={() => handleScroll("contact")}>Contact</button>

          {/* mobile buttons added */}

          <div className="mobile-buttons">

            <Link to="/signup">
              <button className="btn-outline">Login</button>
            </Link>

            <Link to="/signup">
              <button className="btn-solid">Get Started</button>
            </Link>

          </div>

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

        {/* Hamburger added */}

        <div 
        className="hamburger"
        onClick={()=>setMenuOpen(!menuOpen)}
        >

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;




