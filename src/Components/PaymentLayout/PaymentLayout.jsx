import React from 'react'
import './PaymentLayout.css'

export default function PaymentLayout({children, title}) {
  return (
    <section className="payment-layout">
        <h3 className="section-title">{title}</h3>
        <div className="payment-body">
            {children}
        </div>
    </section>
  )
}
