import React from 'react'
import './Location.css'

export default function Location({title,location,locationLink,call,email,contactNo}) {
  return (
    <section className="location-card">
        <h3 className="section-subtitle">{title}</h3>
        <p className="section-para">
            {location}
        </p>
        <div className="map-and-details">
            <div className="map-wrapper">
                <iframe src={locationLink} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="details-wrapper section-para">
                <p className="detail-data">
                    <span>CALL US @</span> <br />
                    {call}
                </p>
                <p className="detail-data">
                    <span>EMAIL US @</span> <br />
                    {email}
                </p>
                <p className="detail-data">
                    <span>CONTACT NO @</span> <br />
                    {contactNo}
                </p>
            </div>
        </div>
    </section>
  )
}
