import React from 'react'
import "./contact.css";
import { FaEnvelope, } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";



const Contact = () => {
  return (
    <div id="contact" className="min-vh-100 pt-5">
      <div className="container text-light pt-5">
        <div className="row text-center">
          <h4 className="text-danger">Get in touch 😉</h4>
          <h1 className='fw-bold'>Contact me</h1>
          <li className="mb-3 online">
            I'm currently available for work.
          </li>
          <p>
            I'm always looking for new opportunities to help you build your
            product.
          </p>
          <p>Feel free to contact me. I'm waiting for your message.</p>

          <div>
            <ul className='list-unstyled d-flex gap-5 justify-content-center mt-5'>
              <li className='email'>
                <a href="mailto:babathia0000@gmail.com"
              className="text-decoration-none email"><FaEnvelope size={30} /></a>
              </li>
              <li className='linkedin'>
                <a href="https://www.linkedin.com/in/amadou-mamadou-thiam-a7b86222a/"
              className="text-decoration-none linkedin"><FaLinkedin size={30} /></a>
              </li>
              <li className='whatsapp'>
                <a href=""
              className="text-decoration-none whatsapp"><BsWhatsapp size={30} /></a>
              </li>
              <li className='instagram'>
                <a href="https://www.instagram.com/the_princetoutcouleur/"
              className="text-decoration-none text-light instagram">
                <FaInstagram size={30} />
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
