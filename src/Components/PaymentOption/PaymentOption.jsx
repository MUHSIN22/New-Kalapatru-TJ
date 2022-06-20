import React from 'react'
import './PaymentOption.css'

export default function PaymentOption({data:{method,icon}}) {
  return (
    <div className="payment-option-card">
        <img src={`/images/payment/${icon}`} alt="" className="payment-option-logo" />
        <h2 className="section-subtitle">{method}</h2>
    </div>
  ) 
}
