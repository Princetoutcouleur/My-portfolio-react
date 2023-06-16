import React from 'react'
import "./contact.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Contact = () => {
  return (
    <div id="contact" className="min-vh-100 pt-5">
      <div className="container text-light pt-5">
        <div className="row">
          <h4 className="text-danger">Get in touch 😉</h4>
          <h1>Contact me</h1>
          <li className="text-success mb-2">
            I'm currently available for work.
          </li>
          <p>
            I'm always looking for new opportunities to help you build your
            product.
          </p>
          <p>Feel free to contact me. I'm waiting for your message.</p>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
            <a
              href="mailto:babathia0000@gmail.com"
              className="text-decoration-none"
            >
              <div class="card email bg-dark text-light ">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <FaEnvelope size={30} />
                  <p>
                    Email <br />
                    babathiam0000@gmail.com
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
            <a
              href="https://www.linkedin.com/in/amadou-mamadou-thiam-a7b86222a/"
              className="text-decoration-none"
            >
              <div class="linkedin card bg-dark text-light ">
                <div class="card-body  d-flex justify-content-between align-items-center">
                  <FaLinkedin size={30} />
                  <p>
                    LinkedIn <br />
                    Amadou Mamadou Thiam
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
            <a
              href="https://www.instagram.com/the_princetoutcouleur/"
              className="text-decoration-none"
            >
              <div class="instagram card bg-dark text-light ">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <FaInstagram size={30} />
                  <p>
                    Instagram <br />
                    the_princetoutcouleur
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
