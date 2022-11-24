import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Navbar = () => {
  return (
    <div>
      <header id="header">
        <div class="container">
          <h1>
            <a href="index.html">Sushmita Ardhapurkar</a>
          </h1>

          <h2>
            I'm a passionate <span>graphic designer</span>
          </h2>

          <nav id="navbarHome" class="navbar ">
            <ul className="navmob">
              <li>
                <a>
                  <Link class="nav-link" to="/portfolio">
                    Home
                  </Link>
                </a>
              </li>
              <li>
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/skills">
                  Services
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/port">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <i class="fa fa-list mobile-nav-toggle"></i>
          </nav>
          <nav>
            <ul className="navHome">
              <li>
                <Link class="nav-link home" to="/">
                  
                  <i class="fa fa-home" style={{ color: "#18d26e" }}></i> Home
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/skills">
                  Services
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/port">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div class="social-links">
            <a href="https://www.facebook.com/sushmita.ardhapurkar.73" class="facebook">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://instagram.com/s_u_s_h_m_i_t_a_29?igshid=YmMyMTA2M2Y=" class="instagram">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sushmita-ardhapurkar-4b8b75241" class="linkedin">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
