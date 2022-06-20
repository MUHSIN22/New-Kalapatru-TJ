import React from 'react'
import './SliderCard.css'
export default function SliderCard() {
  return (
    <div className="slider-card">
        <video>
            <source src='https://www.w3schools.com/html/movie.mp4' type='video/mp4'/>
        </video>
        <div className="card-body">
            <p className="section-subtitle">Muhsin Neyyathur</p>
            <p className="section-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nihil.</p>
        </div>
    </div>
  )
}
