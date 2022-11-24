import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const Resume = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);
  return (
    <div>
      <div className="container">
        <nav class="navbar  navbar-expand-lg navbar-dark bg-opacity-10 me-auto">
          <div class="container-fluid">
            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
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
                  <a class="nav-link " aria-current="page">
                    <Link class="nav-link" to="/about">
                      About
                    </Link>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link active" aria-current="page">
                    <Link class="nav-link" to="/resume">
                      Resume
                      <i class="fa fa-id-card" style={{ color: "#18d26e" }}></i>
                    </Link>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" aria-current="page">
                    <Link class="nav-link" to="/skills">
                      Services
                    </Link>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" aria-current="page">
                    <Link class="nav-link" to="/port">
                      Portfolio
                    </Link>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" aria-current="page">
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
      <section id="resume" class="resume">
      {loading?<Loading />:
        <div class="container">
          <div class="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div>
            <img
              class="container resume"
              src={require("../img/resume.png")}
              alt=""
              srcset=""
            />
          </div>
        </div>}
      </section>
    </div>
  );
};

export default Resume;
