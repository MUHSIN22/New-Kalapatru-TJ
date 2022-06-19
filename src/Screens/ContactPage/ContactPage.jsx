import React from 'react'
import contactList from '../../JSON DB/contactList'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <main className="contact-page">
        <section className="contact-banner container-padding">
            <h1 className="main-title">Contact Us</h1>
            <div className="contacts">
                <ul className="contact-list">
                    {
                        contactList.map((item,index) => (
                            <>
                                {
                                    index <= 3 &&
                                    <li key={index}>
                                        <span className="contact-icon-wrapper">
                                            <img src={`/icons/contact/${item.icon}`} className='contact-icon' alt="" />
                                        </span>
                                        <span>
                                            <h3 className="section-subtitle">{item.title}</h3>
                                            <p className="section-para">{item.data}</p>
                                        </span>
                                    </li>
                                }
                            </>
                        ))
                    }
                </ul>
                <ul className="contact-list">
                    {
                        contactList.map((item,index) => (
                            <>
                                {
                                    index > 3 &&
                                    <li key={index}>
                                        <span className="contact-icon-wrapper">
                                            <img src={`/icons/contact/${item.icon}`} className='contact-icon' alt="" />
                                        </span>
                                        <span>
                                            <h3 className="section-subtitle">{item.title}</h3>
                                            <p className="section-para">{item.data}</p>
                                        </span>
                                    </li>
                                }
                            </>
                        ))
                    }
                </ul>
            </div>
        </section>
    </main>
  )
}
