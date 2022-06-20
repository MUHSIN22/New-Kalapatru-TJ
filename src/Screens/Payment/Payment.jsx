import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PaymentLayout from '../../Components/PaymentLayout/PaymentLayout'
import PaymentOption from '../../Components/PaymentOption/PaymentOption'
import PaymentList from '../../JSON DB/PaymentList'
import './Payment.css'

export default function Payment() {
  return (
    <main className="payment-page container-padding">
        <h1 className="main-title">Payment</h1>
        
        <PaymentLayout title="UPI">
            <div className="options-wrapper">
              {
                PaymentList.UPI.map((item,index) => (
                  <PaymentOption key={index} data={item} />
                ))
              }
            </div>
            <p className="section-subtitle add-option">
              <FontAwesomeIcon icon={faCirclePlus} />
              <span>Add Another UPI Id</span>
            </p>
        </PaymentLayout>

        <PaymentLayout title="Wallet">
            <div className="options-wrapper">
              {
                PaymentList.wallet.map((item,index) => (
                  <PaymentOption key={index} data={item} />
                ))
              }
            </div>
        </PaymentLayout>

        <PaymentLayout title="Debit / Credit Card">
            <div className="card-wrapper">
              <form className="d-card">
                <label htmlFor="" className="card-label section-subtitle">Card Holder Name</label>
                <input type="text" className="card-input" />
                <label htmlFor="" className="card-label section-subtitle">Card Number</label>
                <input type="text" className="card-input" />
                <div className="valid-and-cvv">
                  <div className="valid-wrapper">
                    <label htmlFor="" className="card-label section-subtitle">Valid upto</label>
                    <div className="date-and-year">
                      <input type="number" min="1" max="10" step="1" />
                      <span>/</span>
                      <input type="number" min="1900" max={new Date().getFullYear()} step="1" />
                    </div>
                  </div>
                  <div className="cvv-wrapper">
                    <label htmlFor="" className="card-label section-subtitle">CVV</label>
                    <input type="text" maxLength="4" size="3" className="card-input" />
                  </div>
                </div>
              </form>
            </div>

            <div className="card-provider-wrapper">
              <img src="/images/payment/master.png" className='card-type-logo' alt="" />
              <img src="/images/payment/visa.png" className='card-type-logo' alt="" />
              <img src="/images/payment/rupay.png" className='card-type-logo' alt="" />
            </div>

            <div className="save-wrapper">
              <input type="checkbox" name="" className='save-card-check' id="" />
              <p className="section-subtitle">Save Card</p>
            </div>

            <button className="payment-btn">Pay Securely</button>
        </PaymentLayout>


        <PaymentLayout title="Net Banking">
            <div className="options-wrapper">
              {
                PaymentList.netBanking.map((item,index) => (
                  <PaymentOption key={index} data={item} />
                ))
              }
            </div>
        </PaymentLayout>
    </main>
  )
}
