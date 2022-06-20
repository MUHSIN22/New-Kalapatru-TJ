import React, { useEffect, useRef } from 'react'
import './Home.css'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FaqCard from '../../Components/FaqCard/FaqCard';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SliderCard from '../../Components/sliderCard/SliderCard';

export default function Home() {
    const sliderContainer = useRef(null)
    useEffect(() => {
        console.log(sliderContainer.current.offsetWidth);
    },[])
  return (
    <main className="home-page">
        {/* <button className="btn-quick-service">Quick Service</button> */}
        <section className="home-banner container-padding">
            <div className="image-section">
                <img src="/images/home/home-banner-img.png" className='home-banner-img' alt="" />
            </div>
            <div className="banner-content">
                <h1 className="main-title">
                    Invest in <span>Mutual Funds</span>
                </h1>
                <h3 className="section-subtitle">Trusted by many peoples. <br /> Start investing Today </h3>
                <button className="btn-get-started">Get Started</button>
            </div>
        </section>

        <section className="welcome-section container-padding">
            <div className="welcome-content">
                <h1 className="section-title">Welcome To Kalpataru Multiplier Ltd.</h1>
                <div className="welcome-card">
                    <p className="card-para section-para">
                        Kalpataru is a wishful Devine Tree and in present context a 
                        widely Trusted, Time tested and Transparent Share Broker, 
                        Investment Advisor and D.P. of this region. Kalpataru offers 
                        a complete solution to all your Investment problems, needs 
                        and requirements since 1992. Our field of operation is Share 
                        Trading, Commodity, Derivative (F&O) Trading, Currency, IPO, 
                        Demat, Mutual Fund and Pan Card Services.
                    </p>
                    <button className="btn-read-more">Read More</button>
                </div>
            </div>
            <div className="welcome-image-section">
                <img src="/images/home/welcome.png" alt="" className="welcome-image" />
            </div>
        </section>

        <section className="features-section container-padding">
            <div className="feature-image-wrapper">
                <img src="/images/home/feature.png" alt="" className="feature-image" />
            </div>
            <div className="feature-content">
                <h1 className="section-title">Features</h1>
                <ul className="features-list">
                    <li className="feature-card">
                        Expert <br /> Advidsory
                    </li>
                    <li className="feature-flow">
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </li>
                    <li className="feature-card">
                        Transparent <br /> Pricing
                    </li>
                    <li className="feature-flow">
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </li>
                    <li className="feature-card">
                        Flexible <br /> Brokerage Plans
                    </li>
                    <li className="feature-flow">
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </li>
                    <li className="feature-card">
                        Offers Both <br /> Online and Offline
                    </li>
                </ul>
            </div>
        </section>

        <section className="offered-product-section container-padding">
            <h1 className="section-title">Products Offered Within Exchanges</h1>
            <div className="op-image-wrapper">
                <img src="/images/home/offered-product.png" alt="" className="op-image" />
            </div>
            <div className="op-content">
                <div className="btns-wrapper">
                    <button className="btn-op">NSE</button>
                    <button className="btn-op">BSE</button>
                    <button className="btn-op">MCX</button>
                </div>
                <ul className="op-card-list">
                    <li className="op-card">Equities</li>
                    <li className="op-card">Derivatives</li>
                    <li className="op-card">Fixed Income & Debt</li>
                </ul>
            </div>
        </section>
        
        <section className="contact-section container-padding">
            <h1 className="section-title">Make Right Decision With Us</h1>
            <div className="section-subtitle">Drop Your Details</div>

            <form className="contact-form">
                <input type="text" placeholder='Name' className="contact-input" />
                <input type="number" placeholder='Mobile Number' className="contact-input" />
                <input type="email" placeholder='Email ID' className="contact-input" />
                <button className="btn-submit" type='submit'>Submit</button>
            </form>

            <div className="contact-image-wrapper">
                <img src="/images/home/contact.png" alt="" className="contact-image" />
            </div>
        </section>

        <section className="know-more-section container-padding">
            <div className="know-more-content">
                <h1 className="section-title">Want to know more Kalpataru ?</h1>
                <h3 className="section-subtitle">Just click on the button to know more</h3>
                <button className="btn-about-us">About Us</button>
            </div>
            <div className="know-more-image-wrapper">
                <img src="/images/home/about.png" alt="" className="know-more-image" />
            </div>
        </section>

        <section className="service-section container-padding">
            <div className="service-content">
                <h1 className="section-title">Our Services</h1>
                <div className="service-cards-wrapper">
                    <div className="service-card">
                        <h6 className="card-title">Mutual Fund</h6>
                        <img src="/images/home/s1.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card">
                        <h6 className="card-title">Trading</h6>
                        <img src="/images/home/s2.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card">
                        <h6 className="card-title">Equity</h6>
                        <img src="/images/home/s3.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card">
                        <h6 className="card-title">Depository</h6>
                        <img src="/images/home/s4.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card">
                        <h6 className="card-title">IPO</h6>
                        <img src="/images/home/s5.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card">
                        <h6 className="card-title">General Insurance</h6>
                        <img src="/images/home/s6.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card">
                        <h6 className="card-title">PAN Card</h6>
                        <img src="/images/home/s7.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card">
                        <h6 className="card-title">SGB</h6>
                        <img src="/images/home/s8.png" alt="" className="service-card-img" />
                    </div>
                </div>
            </div>

            <div className="service-image-wrapper">
                <img src="/images/home/service.png" alt="" className="service-image" />
            </div>
        </section>


        <section className="client-testimonial">
            <h1 className="section-title">Client's Testimonials</h1>
            <div className="testimonials-wrapper container-padding">
                <div className="navigation-wrapper">
                    <img src="/images/home/left-arrow.png" alt="" className="navigation" />
                    <img src="/images/home/right-arrow.png" alt="" className="navigation" />
                </div>
                <div className="slider-container" ref={sliderContainer}>
                    <OwlCarousel className='owl-theme' loop margin={24} items={5}>
                        <SliderCard/>
                        <SliderCard/>
                        <SliderCard/>
                        <SliderCard/>
                        <SliderCard/>
                        <SliderCard/>
                        <SliderCard/>
                    </OwlCarousel>
                </div>
            </div>
        </section>

        <section className="faq-section container-padding">
            <h1 className="section-title">FAQ's</h1>
            <div className="faq-wrapper">
                <FaqCard/>
                <FaqCard/>
                <FaqCard/>
                <FaqCard/>
            </div>
        </section>
    </main>
  )
}
