import React from 'react'
import InvestorAttentionCard from '../../Components/InvestorAttentionCard/InvestorAttentionCard'
import './InvestorCorner.css'

export default function InvestorCorner() {
  return (
    <main className="investor-page">
            <section className="investor-banner container-padding">
                <div className="content-section">
                    <h1 className="main-title">Expert Advisory for Investors!</h1>
                    <h3 className="section-subtitle">Rules and Regulations set by Regulatory Authorities!</h3>
                </div>
                <div className="banner-img-wrapper">
                    <img src="/images/investor/banner.png" alt="" className="banner-img" />
                </div>
            </section>

            <section className="investor-attention container-padding">
                <h1 className="section-title">Attention Investors!</h1>
                <div className="attention-container">
                    <div className="attention-wrapper">
                        <InvestorAttentionCard data="Investors must beware of fixed guaranteed / regular returns"/>
                        <InvestorAttentionCard data="Do not keep funds Idle with the Stock Broker"/>
                        <InvestorAttentionCard data="Brokers are not permitted to accept, transfer of securities as margin "/>
                        <InvestorAttentionCard data="Always keep your contact details via current / updated mobile number / email id"/>
                    </div> 
                </div>
            </section>

            <section className="beware-section container-padding">
                <h1 className="section-title">Beware of fixed / guaranteed / regular returns</h1>
                <img src="/images/investor/beware.png" alt="" className="beware-img" />
                <p className="section-subtitle">
                    Avoid fixed-return, guaranteed-return, regular-return, and capital-protection programs. Brokers, their authorized representatives, or any of their colleagues are not permitted to provide fixed, guaranteed, consistent returns on your investment, or capital protection, nor are they permitted to engage in any loan agreements with you to cover the interest on the funds you offer.
                    <br /><br />
                    Please be aware that the relevant Committee of the Exchange, in accordance with the authorized rules, will not accept a claim for monies or securities delivered to the broker under any arrangement or agreement of indicative return in the event of a member's default.
                </p>
            </section>
        </main>
  )
}
