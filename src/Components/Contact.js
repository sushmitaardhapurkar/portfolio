import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const A = "service_obqqafe";
    const B = "template_4qt8tul";
    const C = "b4encGlvTNFAy9tEN";
    emailjs.sendForm(A, B, form.current, C).then(
      (result) => {
        console.log(result.text);
        alert("Your request has been sent! I will be in touch soon !");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
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
                  <a class="nav-link " aria-current="page">
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
                  <a class="nav-link" aria-current="page">
                    <Link class="nav-link" to="/port">
                      Portfolio
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page">
                    <Link class="nav-link" to="/contact">
                      Contact
                      <i class="fa fa-phone" style={{ color: "#18d26e" }}></i>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section id="contact" class="contact">
      {loading?<Loading />:
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div class="row mt-2">
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="info-box">
                <i class="fa fa-map"></i>
                <h3>My Address</h3>
                <p>Akurdi, Pune</p>
              </div>
            </div>

            <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div class="info-box">
                <i class="fa fa-share-alt"></i>
                <h3>Social Profiles</h3>
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
            </div>

            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div class="info-box">
                <i class="fa fa-envelope"></i>
                <h3>Email Me</h3>
                <p>sushmitava1111@gmail.com</p>
              </div>
            </div>
            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div class="info-box">
                <i class="fa fa-phone-call"></i>
                <h3>Call Me</h3>
                <p>+919623625679 </p>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} class="php-email-form mt-4">
            <div class="row">
              <div class="col-md-6 form-group">
                <input
                  type="text"
                  name="user_name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="user_email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                name="user_subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                style={{ resize: "none" }}
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div class="my-3">
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
        }
      </section>
    </div>
  );
}
