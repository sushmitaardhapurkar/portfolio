import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

    return (
      <div>
        <div className=" container">
          <nav class="navbar  navbar-expand-lg navbar-dark bg-opacity-10 me-auto">
            <div class="container-fluid">
              <button
                class="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-navicon"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item  sd">
                    <a>
                      <Link class="nav-link" to="/portfolio">
                        Home
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a>
                      <Link class="nav-link active" to="/about">
                        About
                        <i
                          class="fa fa-info-circle"
                          style={{ color: "#18d26e" }}
                        ></i>
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a>
                      <Link class="nav-link" to="/resume">
                        Resume
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a>
                      <Link class="nav-link" to="/skills">
                        Services
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a>
                      <Link class="nav-link" to="/port">
                        Portfolio
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a>
                      <Link class="nav-link" to="/contact">
                        Contact
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        
        <section id="about" class="about">
         {loading?<Loading />:
        
        <>

        
          <div class="about-me container">
            <div class="section-title">
              <h2>About</h2>
              <p>Learn more about me</p>
            </div>

            <div class="row">
              <div class="col-lg-4 mt-5" data-aos="fade-right">
                <img
                  src={require("../img/me.jpg")}
                  class="img-fluid me rounded-circle"
                  alt=""
                />
              </div>
              <div
                class="col-lg-8 mt-5 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>Graphic Designer</h3>
                <p class="fst-italic mt-5">
                  I would introduce myself as creative, responsible, and
                  attentive graphic designer. Give me an idea, or a goal you
                  want to meet with a product, and you can be sure I come up
                  with some interesting sketches and designs who is always
                  curious to learn and build new things.
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="fa fa-chevron-right"></i>
                        <strong>Birthday:</strong> <span>19 January 1998</span>
                      </li>
                      <li>
                        <i class="fa fa-chevron-right"></i>
                        <strong>Phone:</strong> <span>+919623625679 </span>
                      </li>
                      <li>
                        <i class="fa fa-chevron-right"></i>
                        <strong>City:</strong> <span>Pune</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="fa fa-chevron-right"></i>
                        <strong>Age:</strong> <span>24</span>
                      </li>
                      <li>
                        <i class="fa fa-chevron-right"></i>
                        <strong>Degree:</strong> <span>Diploma</span>
                      </li>
                      <li>
                        <i class="fa fa-chevron-right"></i>
                        <strong>Email:</strong>
                        <span>sushmitava1111@gmail.com</span>
                      </li>
                      <li>
                        <i class="fa fa-chevron-right"></i>
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="counts container ">
            <div class="row d-flex center justify-content-center">
              <div class="col-lg-3 col-md-6 mt-5 mt-md-0 ">
                <div class="count-box ">
                  <i
                    class="fa fa-paper-plane "
                    style={{ fontSize: "20px" }}
                  ></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    class="purecounter"
                  >
                    16
                  </span>
                  <p>Projects</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="fa fa-hourglass-1 rounded-circle"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    class="purecounter"
                  >
                    1463
                  </span>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>
          </div>
          <div class="counts container">
            <div class="section-title">
              <h2>Skills</h2>
            </div>

            <div class="row d-flex center justify-content-center">
              <div class="col-lg-6 d-flex center justify-content-center">
                <img
                  src={require("../img/ai.png")}
                  class="skill"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="col-lg-6 d-flex center justify-content-center">
                <img
                  src={require("../img/ps.png")}
                  class="skill"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="col-lg-6 d-flex center justify-content-center">
                <h2>
                  <span class="skill-text d-flex text-center justify-content-center">
                    Adobe Illustrator
                  </span>
                </h2>
              </div>

              <div class="col-lg-6 d-flex center justify-content-center">
                <h2>
                  <span class="skill-text d-flex text-center justify-content-center">
                    Adobe Photopshop
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div class="interests container">
            <div class="section-title">
              <h2>Interests</h2>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-4">
                <div class="icon-box">
                  <i class="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                  <h3>Sketching</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div class="icon-box">
                  <i
                    class="ri-bar-chart-box-line"
                    style={{ color: "#5578ff" }}
                  ></i>
                  <h3>Reading Books</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div class="icon-box">
                  <i
                    class="ri-calendar-todo-line"
                    style={{ color: "#e80368" }}
                  ></i>
                  <h3>Photography</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div class="icon-box">
                  <i
                    class="ri-paint-brush-line"
                    style={{ color: "#e361ff" }}
                  ></i>
                  <h3>Painting</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <i
                    class="ri-database-2-line"
                    style={{ color: "#47aeff" }}
                  ></i>
                  <h3>Creative Handcrafts </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <i
                    class="ri-gradienter-line"
                    style={{ color: "#ffa76e" }}
                  ></i>
                  <h3>Learning a new skill</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <i
                    class="ri-file-list-3-line"
                    style={{ color: "#11dbcf" }}
                  ></i>
                  <h3>Travelling</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <i
                    class="ri-fingerprint-line"
                    style={{ color: "#29cc61" }}
                  ></i>
                  <h3>Mountain climbing</h3>
                </div>
              </div>
            </div>
          </div></>} 
        </section>
      </div>
    );
  }

export default About;
