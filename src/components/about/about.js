import React from 'react'
import './about.css'
import image from '../../assets/imgs/baba.png'

const about = () => {
  return (
    <div id="about" className="bg-dark min-vh-100 text-light pt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
            <h4 className="text-danger">About me 🔥</h4>
            <h1>Get to know me</h1>
            <p>
              My name is Amadou Mamadou Thiam but I am better known by the name
              of Baba Thiam and there are also friends who call me
              Princetoutcouleur; so I am 22 years old, I am a computer science
              student (web development) and I live in Darou Salam 2 / Fass Mbao
              / Dakar / Senegal.
            </p>
            <p>
              I'm constantly looking to learn new things every day and looking
              for new ways to improve my skills and knowledge to better myself
              as a developer.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default about
