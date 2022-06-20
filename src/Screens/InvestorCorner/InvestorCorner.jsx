import React from 'react'
import InvestorAttentionCard from '../../Components/InvestorAttentionCard/InvestorAttentionCard'
import './InvestorCorner.css'

export default function InvestorCorner() {
  return (
    <main className="investor-page">
            <section className="investor-banner container-padding">
                <div className="content-section">
                    <h1 className="main-title">Advisory for Investors</h1>
                    <h3 className="section-subtitle">Regulatory statements & Complaint Redressal DetailsStatements about latest  rules and regulations set by regulatory authoritie</h3>
                </div>
                <div className="banner-img-wrapper">
                    <img src="/images/investor/banner.png" alt="" className="banner-img" />
                </div>
            </section>

            <section className="investor-attention container-padding">
                <h1 className="section-title">Attention Investors!</h1>
                <div className="attention-container">
                    <div className="attention-wrapper">
                        <InvestorAttentionCard/>
                        <InvestorAttentionCard/>
                        <InvestorAttentionCard/>
                        <InvestorAttentionCard/>
                    </div> 
                </div>
            </section>

            <section className="beware-section container-padding">
                <h1 className="section-title">Beware of fixed / guaranteed / regular returns</h1>
                <img src="/images/investor/beware.png" alt="" className="beware-img" />
                <p className="section-subtitle">
                    Beware of fixed / guaranteed / regular returns / capital protection schemes. Brokers or their authorized persons or any of their associates are not authorized to offer fixed / guaranteed / regular returns / capital protection on your investment or authorized to enter into any loan agreement with you to pay interest on the funds offered by you. 
                    <br /><br />
                    Please note that in case of default of a member claim for funds or securities given to the broker under any arrangement/ agreement of indicative return will not be accepted by the relevant Committee of the Exchange as per the approved norms.
                </p>
            </section>
        </main>
  )
}
