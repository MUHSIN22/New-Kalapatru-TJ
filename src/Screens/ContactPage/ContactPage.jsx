import React from 'react'
import Location from '../../Components/Location/Location'
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
                                            <h3 className="contact-title">{item.title}</h3>
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
                                            <h3 className="contact-title">{item.title}</h3>
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

        <section className="location-section container-padding">
            <h1 className="section-title">Location</h1>
            <div className="location-wrapper">
                <Location
                    title="CORPORATE OFFICE"
                    location="Hall No. 2, 1st Floor Western Block, Above Central Bank, GTB Complex, T. T. Nagar, Bhopal-462003"
                    locationLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.85820531673!2d77.26580695520337!3d23.1993476944418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1655663434333!5m2!1sen!2sin"
                    call="0755-4223778, 4350141-143, 0755-428301"
                    email="kmlho@kalpatarumulti.com NAME OF CONTACT PERSON Amitabh Manya Jain (M.D.)"
                    contactNo="09425008895"
                />
               <Location
                    title="HEAD OFFICE"
                    location="Kalpataru House, 18 Itwara, Bhopal (MP) - 462001"
                    locationLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.85820531673!2d77.26580695520337!3d23.1993476944418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1655663434333!5m2!1sen!2sin"
                    call="0755-2530536, 2739822, 4262655"
                    email="kmlho@kalpatarumulti.com"
                    contactNo="09425008895"
                />
            </div>
        </section>
    </main>
  )
}
