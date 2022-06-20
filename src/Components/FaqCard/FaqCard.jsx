import React, { useState } from 'react'
import './FaqCard.css'

export default function FaqCard({data:{question,description,img}}) {
    const [isFlip,setFlip] = useState(false)
  return (
    <div className={"faq-card "+(isFlip?" flipped-faq":null)}>
        <div className="card-front">
            <p className="section-para">
                {question}
            </p>
            <img src={"/images/home/"+img} alt="" className="faq-img" />
            <img src="/images/home/faq-arrow.png" onClick={() => setFlip(true)} alt="" className="faq-arrow" />
        </div>
        <div className="card-back">
            <p className="section-para">
                {description}
            </p>
            <img src="/images/home/faq-arrow.png" alt="" onClick={() => setFlip(false)} className="faq-arrow" />
        </div>
        
    </div>
  )
}
