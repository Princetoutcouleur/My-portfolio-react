import React from 'react'
import "./header.css"
import Button from "react-bootstrap/Button";
import image from "../../assets/imgs/baba.png";

const header = () => {
  return (
    <div id="head" className="min-vh-100 pt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12  pt-5 left">
            <h4>Hi there, I'm Baba Thiam 👋</h4>
            <h1 className="my-4">Web Developer</h1>
            <p className="mb-3">
              I help people and brands reach their goals by designing & building
              web site that solve real user needs
            </p>
            <div>
              <a href="#project">
                <Button variant="danger" className="me-4">
                  See my projects
                </Button>
              </a>
              <a href="#about">
                <Button variant="dark">More about me</Button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default header
