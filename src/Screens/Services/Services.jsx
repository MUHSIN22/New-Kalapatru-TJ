import React, { useRef, useState } from 'react'
import Accordion from '../../Components/Accordion/Accordion'
import BannerSecondary from '../../Components/BannerSecondary/BannerSecondary'
import './Services.css'

export default function Services() {
  const topCardRef = useRef();
  const bottomCardRef = useRef();
  const bottomContent = useRef();
  const topContent = useRef();
  let isSwap = false;

  const swapTheCard = () => {
    if(!isSwap){
      topCardRef.current.style.transform = "translateX(-55%)"
      bottomCardRef.current.style.transform = "translateX(55%)"
      bottomContent.current.style.opacity = '1'
      setTimeout(() => {
        bottomCardRef.current.style.zIndex = '3'
        topCardRef.current.style.transform = "translateX(5%)"
        bottomCardRef.current.style.transform = "translateX(-5%)"
        topContent.current.style.opacity = '0'
      },300)
      isSwap = true;
    }else{
      bottomCardRef.current.style.transform = "translateX(-55%)"
      topCardRef.current.style.transform = "translateX(55%)"
      topContent.current.style.opacity = '1'
      bottomCardRef.current.style.zIndex = '1'
      setTimeout(() => {
        bottomCardRef.current.style.transform = "translateX(5%)"
        topCardRef.current.style.transform = "translateX(-5%)"
        bottomContent.current.style.opacity = '0'
      },300)
      isSwap = false;
    }
  }

  return (
    <main className="services-page">
        <BannerSecondary 
            title="Mutual Funds"
            description="Active mutual funds have an edge over passive funds in the long run"
            image="services.png"
            btnContent="Apply Mutual Funds"
        />
        <div className="service-wrapper container-padding">
            <h1 className="title-50-600">Mutual Funds Distributor</h1>
            <Accordion  title="What are Mutual funds?">
                <p className="section-subtitle">
                  A mutual fund is a company that pools money from many 
                  investors and invests the money in securities such as stocks, 
                  bonds, and short-term debt.
                </p>
            </Accordion>

            <h1 className="title-50-600">National Pension Schema</h1>
            <div className="pention-schema-grid">
              <div className="top-card" ref={topCardRef}>
                <img src="/images/services/pention.png" alt="" className="pension-img" />
                <div className="card-content">
                  <h1 className="section-title">National Pension Scheme</h1>
                  <p className="section-para" ref={topContent}>
                    It was introduced by the government in 
                    2004. Initially, it was an exclusive scheme 
                    available only to government employees. 
                    However, in 2009, NPS in India was made 
                    available to employees beyond the public 
                    sector. It allows you to invest in the 
                    scheme throughout your employment.
                  </p>
                  <button className="btn-see-more" onClick={swapTheCard}>See More</button>
                </div>
              </div>
              <div className="bottom-card" ref={bottomCardRef}>
                <p className="section-para" ref={bottomContent}>
                    It was introduced by the government in 
                    2004. Initially, it was an exclusive scheme 
                    available only to government employees. 
                    However, in 2009, NPS in India was made 
                    available to employees beyond the public 
                    sector. It allows you to invest in the 
                    scheme throughout your employment.
                  </p>
                  <button className="btn-see-more" onClick={swapTheCard}>See More</button>
              </div>
            </div>

            <h1 className="title-50-600">Bonds</h1>
            <div className="bond-card">
              <div className="main-content">
                <h1 className="section-title">Bonds</h1>
                <p className="section-para">
                  Bonds are a type of investment designed to 
                  aid governments and corporations to raise 
                  money. In a mutual fund, money collected 
                  from various investors is taken together to 
                  buy a large variety of securities.
                </p>
              </div>
              <div className="sub-content">
                  <h3 className="section-subtitle">Is Bond is a good investment?</h3>
                  <p className="section-para" >
                    Bond funds are a good way to diversify your portfolio, beyond just holding stocks. In terms of risk, bonds are comparatively less risky than stocks or mutual funds.
                  </p>
              </div>

              <img src="/images/services/bond.png" alt="" className="bond-img" />
            </div>

            <h1 className="title-50-600">Tax saving schemes</h1>
            <Accordion title="Tax saving schemes">
                <p className="section-subtitle">
                  Tax saving mutual funds are just like any other mutual funds 
                  with an added tax-saving benefit. The special feature of this 
                  type of mutual fund is that the investments made in the 
                  tax-saving mutual funds are eligible for tax benefits 
                  under section 80C of the Indian Income Tax Act.
                </p>
            </Accordion>
        </div>
    </main>
  )
}
