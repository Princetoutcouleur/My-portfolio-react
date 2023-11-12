import React from "react";
import "./contact.css";
import Mail from "../../assets/icons/mail.png";
import whatsApp from "../../assets/icons/WhatsApp.webp";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter-x.png";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  function handleWhatsAppClick() {
    const defaultText = encodeURIComponent("Salut Baba Thiam.");
    const phoneNumber = "771010502";

    window.open(`https://wa.me/${phoneNumber}?text=${defaultText}`, "_blank");
  }
  return (
    <div id="contact" className="min-vh-100 pt-5">
      <div className="container text-light pt-5">
        <div className="row text-center">
          <h4 className="text-danger">Get in touch 😉</h4>
          <h1 className="fw-bold">Contact me</h1>
          <li className="mb-3 online">I'm currently available for work.</li>
          <p>
            I'm always looking for new opportunities to help you build your
            product.
          </p>
          <p>Feel free to contact me. I'm waiting for your message.</p>

          <div>
            <ul className="list-unstyled d-flex gap-4 justify-content-center mt-5">
              <li className="email">
                <a
                  href="mailto:babathia0000@gmail.com"
                  className="text-decoration-none mail"
                >
                  <img src={Mail} alt="" />
                </a>
              </li>
              <li className="linkedin">
                <a
                  href="https://www.linkedin.com/in/amadou-mamadou-thiam-a7b86222a/"
                  className="text-decoration-none linkedin"
                >
                  <FaLinkedin className="icon" />
                </a>
              </li>
              <li className="whatsapp">
                <a
                  id="whatsApp"
                  href="#"
                  onClick={handleWhatsAppClick}
                  className="text-decoration-none icon"
                >
                  <img src={whatsApp} alt="" />
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/the_princetoutcouleur/"
                  className="text-decoration-none text-light icon"
                >
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li className="twitter">
                <a
                  href="https://twitter.com/Babathiam01"
                  className="text-decoration-none text-black icon"
                >
                  <img src={twitter} alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
