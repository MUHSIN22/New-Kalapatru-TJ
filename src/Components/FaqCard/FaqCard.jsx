import React, { useState } from 'react'
import './FaqCard.css'

export default function FaqCard() {
    const [isFlip,setFlip] = useState(false)
  return (
    <div className={"faq-card "+(isFlip?" flipped-faq":null)}>
        <div className="card-front">
            <p className="section-para">
                What is the difference between saving and investing?
            </p>
            <img src="/images/home/f1.png" alt="" className="faq-img" />
            <img src="/images/home/faq-arrow.png" onClick={() => setFlip(true)} alt="" className="faq-arrow" />
        </div>
        <div className="card-back">
            <p className="section-para">
                Making wise financial decisions now will protect your Assets for the foreseeable future. It's a great way to build your wealth while also generating returns that outpace inflation. Compounding also works in your favor.
            </p>
            <img src="/images/home/faq-arrow.png" alt="" onClick={() => setFlip(false)} className="faq-arrow" />
        </div>
        
    </div>
  )
}
