import React from 'react'
import './about.css'
import image from '../../assets/imgs/baba.png'

const about = () => {
  return (
    <div id="about" className="bg-dark min-vh-100 text-light pt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
            <h4 className='text-danger'>About me 🔥</h4>
            <h1>Get to know me</h1>
            <p>
              I'm a UX/UI Designer based in Argentina. I'm focused on designing
              and developing user-friendly interfaces to offer the best product.
              I'm passionate about improving the lives of others through
              user-centered design.
            </p>
            <p>
              I have experience working in agile environments and have worked
              through the entire product development cycle, from ideation to
              delivery. I've worked as a freelancer to help clients design and
              build unique products that were visually strong, worked
              beautifully, were easy to use, but most importantly, focused on
              the user experience.
            </p>
            <p>
              I'm constantly looking to learn new things every day and looking
              for new ways to improve my skills and knowledge to better myself
              as a designer.
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
