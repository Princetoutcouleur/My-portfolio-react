import React from 'react'
import './project.css'
import Tayeur from '../../assets/imgs/projects/tayeur.png'
import Hoobank from '../../assets/imgs/projects/hoobank.png'
import Travel from '../../assets/imgs/projects/travel.png'
import Ecommerce from '../../assets/imgs/projects/princetoutcouleur-business.png'
import Wethenew from '../../assets/imgs/projects/wethenew.png'
import YelpCamp from '../../assets/imgs/projects/yelp-camp.png'
import CardProject from './CardProject'

const project = () => {
  const CardData = [
    {
      title: 'tayeur',
      image: Tayeur,
      url: 'https://tayeur-gestion.vercel.app/'
    },
    {
      title: 'hoobank',
      image: Hoobank,
      url: 'https://hoobank-kalika.vercel.app/'
    },
    {
      title: 'travel',
      image: Travel,
      url: 'https://travel-website-rouge-nine.vercel.app/'
    },
    {
      title: 'E-commerce',
      image: Ecommerce,
      url: 'https://the-princetoutcouleur-business.vercel.app/'
    },
    {
      title: 'wethenew',
      image: Wethenew,
      url: 'https://princetoutcouleur.github.io/-Princetoutcouleur-princetoutcouleur-business-clone-wethenew/'
    },
    {
      title: 'yelp camp',
      image: YelpCamp,
      url: 'https://princetoutcouleur.github.io/Yelp-camp-starter/'
    },
  ]
  return (
    <div id="project" className="min-vh-100 py-5 text-light">
      <div className="container py-5">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h4 className="mb-2 text-danger">My projects 🔮</h4>
            <h1 className="mb-2">Some of my latest works</h1>
            <p className="mb-5">
              Design pleasant interfaces and digital products, user-centered and
              easy to use.
            </p>
          </div>
        </div>
        <div className="row">
        {CardData.map((card) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <CardProject image={card.image} title={card.title} url={card.url}/>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
}

export default project
