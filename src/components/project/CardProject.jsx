import React from 'react'
import './project.css'
import {BsArrowUpRight} from 'react-icons/bs'

const CardProject = (props) => {
  return (
    <div>
      <div className='card' id='cardProject'>
        <div className='card-body'>
            <div className='card-img'>
                <img src={props.image} alt="" className='img-fluid'/>
            </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
            <div>
              <p className='text-uppercase text-light'>{props.title}</p>
            </div>
            <div>
              <a href={props.url}>
                <button className='btn btn-danger'>Visit Site<BsArrowUpRight className='ms-2 fs-5 fw-bold'/></button>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardProject
