import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const Skills = () => {
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
                  <a class="nav-link active" aria-current="page">
                    <Link class="nav-link" to="/skills">
                      
                      Services
                      <i
                        class="fa fa-line-chart"
                        style={{ color: "#18d26e" }}
                      ></i>
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
      <section id="services" class="services">
      {loading?<Loading />:
        <div class="container">
          <div class="section-title">
            <h2>Services</h2>
            <p>My Services</p>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-calendar-o"></i>
                </div>
                <h4>
                  <a href="">Publication </a>
                </h4>
                <p>
                  Publications are long-form pieces that communicate with an
                  audience through public distribution. They have traditionally
                  been a print medium. Publication design is a classic type of
                  design—think books, newspapers, magazines and catalogs.
                  However, there’s recently been a significant rise in digital
                  publishing.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-envelope-open-o"></i>
                </div>
                <h4>
                  <a href="">Packaging </a>
                </h4>
                <p>
                  Most products require some form of packaging to protect and
                  prepare them for storage, distribution, and sale.
                  But packaging design can also communicate directly to
                  consumers, which makes it an extremely valuable marketing
                  tool. Every box, bottle and bag, every can, container, or
                  canister is a chance tell the story of a brand.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-newspaper-o"></i>
                </div>
                <h4>
                  <a href="">Advertising Design</a>
                </h4>
                <p>
                  Advertising agencies employ graphic designers to work as
                  creative directors, collaborating with other members of the
                  agency team to create concepts for advertising campaigns
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-copyright"></i>
                </div>
                <h4>
                  <a href="">Logo </a>
                </h4>
                <p>
                  A logo is an easily recognizable graphic symbol that
                  identifies a company, a commercial product, or any public or
                  private entity. It is one of the ways to distinguish a brand
                  in a competitive world, full of graphic elements that try to
                  attract our attention every day. A logo is generally a
                  combination of typographies, graphics/symbols, and colors. It
                  is a graphic element that is part of the visual identity of a
                  brand.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-address-card"></i>
                </div>
                <h4>
                  <a href="">Campaign</a>
                </h4>
                <p>
                  Campaign is a specifically designed strategy that is carried
                  out across different mediums in order to achieve desired
                  results such as increased brand awareness, increased sales,
                  and improved communication within a specific market. All of
                  this is accomplished through advertising.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="fa fa-map-o"></i>
                </div>
                <h4>
                  <a href="">Poster Design</a>
                </h4>
                <p>
                  A poster is a large sheet that is placed either on a public
                  space to promote something or on a wall as decoration.
                  Typically, posters include both textual and graphic elements,
                  although a poster may be either wholly graphical or wholly
                  text. Posters are designed to be both eye-catching and
                  informative.
                </p>
              </div>
            </div>
          </div>
        </div>}
      </section>
    </div>
  );
};

export default Skills;
