import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
export default function Portfolio() {
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
                  <a class="nav-link" aria-current="page">
                    <Link class="nav-link" to="/about">
                      About
                    </Link>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" aria-current="page">
                    <Link class="nav-link" to="/resume">
                      Resume
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
                  <a class="nav-link active" aria-current="page">
                    <Link class="nav-link" to="/port">
                      Portfolio
                      <i
                        class="fa fa-object-group"
                        style={{ color: "#18d26e" }}
                      ></i>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
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
      <section id="portfolio" class="portfolio">
      {loading?<Loading />:
        <div class="container">
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>My Work</p>
          </div>

          <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-1.jpg")}
                  class="img-fluid"
                  alt=""
                />

                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-1.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-2.jpg")}
                  class="img-fluid"
                  alt=""
                />

                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-2.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-3.jpg")}
                  class="img-fluid"
                  alt=""
                />

                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-3.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-4.jpg")}
                  class="img-fluid"
                  alt=""
                />

                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-4.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-5.jpg")}
                  class="img-fluid"
                  alt=""
                />

                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-5.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-6.jpg")}
                  class="img-fluid"
                  alt=""
                />

                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-6.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-7.jpg")}
                  class="img-fluid"
                  alt=""
                />

                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-7.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-8.jpg")}
                  class="img-fluid"
                  alt=""
                />

                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-8.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-9.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-9.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-10.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-10.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-11.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-11.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-12.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-12.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-12.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-12.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-13.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-13.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-14.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-14.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-15.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-15.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-16.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-16.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={require("../img/portfolio/portfolio-17.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <a
                      href={require("../img/portfolio/portfolio-17.jpg")}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </section>
    </div>
  );
}
