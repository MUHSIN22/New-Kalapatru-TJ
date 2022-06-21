import React from 'react'
import './BannerSecondary.css'

export default function BannerSecondary({title,description,image,btnContent}) {
  return (
    <section className="banner-secondary container-padding">
        <div className="content-wrapper">
            <h1 className="banner-title">{title}</h1>
            <p className="banner-description">
                {description}
            </p>
            {
                btnContent &&
                <button className="btn-banner">{btnContent}</button>
            }
        </div>
        <div className="image-wrapper">
            <img src={`/images/banner secondary/${image}`} alt="" className="banner-image" />
        </div>
    </section>
  )
}
