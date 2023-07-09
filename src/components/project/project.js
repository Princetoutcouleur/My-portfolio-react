import React from 'react'
import './project.css'
import Project1 from '../../assets/imgs/projects/urban nft.png'
import Project2 from '../../assets/imgs/projects/developer-portfolio.png'
import Project3 from '../../assets/imgs/projects/princetoutcouleur-business.png'
import Project4 from '../../assets/imgs/projects/team-page.png'
import Project5 from '../../assets/imgs/projects/wethenew.png'
import Project6 from '../../assets/imgs/projects/yelp-camp.png'

const project = () => {
  return (
    <div id="project" className="min-vh-100 pt-5 text-light">
      <div className="container pt-5 ">
        <div className="row pt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h4 className="mb-2 text-danger">My projects 🔮</h4>
            <h1 className="mb-2">Some of my latest works</h1>
            <p className="mb-5">
              Design pleasant interfaces and digital products, user-centered and
              easy to use.
            </p>
            <div class="card mb-3 bg-dark">
              <div class="card-img">
                <img src={Project1} alt="" />
              </div>
              <div class="card-info">
                <p class="text-title">Urban NFT Dashbord</p>
              </div>
              <div class="card-footer d-flex justify-content-end gap-3">
                <a href="https://urban-nft-dashboard.vercel.app/">
                  <button class="btn btn-danger">Visit Site</button>
                </a>
                <a href="https://github.com/Princetoutcouleur/urban-nft-dashboard">
                  <button class="btn btn-secondary">Github</button>
                </a>
              </div>
            </div>
            <div class="card mb-3 bg-dark">
              <div class="card-img">
                <img src={Project2} alt="" />
              </div>
              <div class="card-info">
                <p class="text-title">Developer Portfolio</p>
              </div>
              <div class="card-footer d-flex justify-content-end gap-3">
                <a href="https://princetoutcouleur.github.io/developer-portfolio/">
                  <button class="btn btn-danger">Visit Site</button>
                </a>
                <a href="https://github.com/Princetoutcouleur/developer-portfolio">
                  <button class="btn btn-secondary">Github</button>
                </a>
              </div>
            </div>
            <div class="card mb-3 bg-dark">
              <div class="card-img">
                <img src={Project3} alt="" />
              </div>
              <div class="card-info">
                <p class="text-title">The Princetoucouleur Business</p>
              </div>
              <div class="card-footer d-flex justify-content-end gap-3">
                <a href="https://princetoutcouleur.github.io/the-princetoutcouleur-business/">
                  <button class="btn btn-danger">Visit Site</button>
                </a>
                <a href="https://github.com/Princetoutcouleur/the-princetoutcouleur-business">
                  <button class="btn btn-secondary">Github</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="card mb-3 bg-dark">
              <div class="card-img">
                <img src={Project4} alt="" />
              </div>
              <div class="card-info">
                <p class="text-title">A Team Page</p>
              </div>
              <div class="card-footer d-flex justify-content-end gap-3">
                <a href="https://princetoutcouleur.github.io/my-team-page/">
                  <button class="btn btn-danger">Visit Site</button>
                </a>
                <a href="https://github.com/Princetoutcouleur/my-team-page">
                  <button class="btn btn-secondary">Github</button>
                </a>
              </div>
            </div>
            <div class="card mb-3 bg-dark">
              <div class="card-img">
                <img src={Project5} alt="" />
              </div>
              <div class="card-info">
                <p class="text-title">Clone Wethenew</p>
              </div>
              <div class="card-footer d-flex justify-content-end gap-3">
                <a href="https://princetoutcouleur.github.io/-Princetoutcouleur-princetoutcouleur-business-clone-wethenew/">
                  <button class="btn btn-danger">Visit Site</button>
                </a>
                <a href="https://github.com/Princetoutcouleur/-Princetoutcouleur-princetoutcouleur-business-clone-wethenew">
                  <button class="btn btn-secondary">Github</button>
                </a>
              </div>
            </div>
            <div class="card mb-3 bg-dark">
              <div class="card-img">
                <img src={Project6} alt="" />
              </div>
              <div class="card-info">
                <p class="text-title">Yelp Camp</p>
              </div>
              <div class="card-footer d-flex justify-content-end gap-3">
                <a href="https://princetoutcouleur.github.io/Yelp-camp-starter/">
                  <button class="btn btn-danger">Visit Site</button>
                </a>
                <a href="https://github.com/Princetoutcouleur/Yelp-camp-starter">
                  <button class="btn btn-secondary">Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default project
