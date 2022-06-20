import React from 'react'
import './InvestorAttentionCard.css'

export default function InvestorAttentionCard() {
    const investorAttentionActivator = (event) => {
        let activeCard = document.querySelector(".investor-attention-card--active")
        if(activeCard){
            activeCard.classList.remove('investor-attention-card--active')
        }
        event.target.classList.toggle("investor-attention-card--active")
    }
  return (
    <div className="investor-attention-card" onClick={investorAttentionActivator}>
        <h3 className="section-para">Beware of fixed / guaranteed / regular returns</h3>
        <div className="arrow-wrapper">
            <span className="h-line"></span>
            <span className="circle"></span>
            <span className="h-line"></span>
        </div>
    </div>
  )
}
