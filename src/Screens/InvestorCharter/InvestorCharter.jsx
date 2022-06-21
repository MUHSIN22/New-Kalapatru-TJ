import React from 'react'
import BannerSecondary from '../../Components/BannerSecondary/BannerSecondary'
import TablePrimary from '../../Components/TablePrimary/TablePrimary'
import investorCharter from '../../JSON DB/investorCharter'
import './InvestorCharter.css'

export default function InvestorCharter() {
  return (
    <main className="investor-charter-page">
        <BannerSecondary 
            title="Investor Charter"
            description="Regulatory statements & Complaint Redressal Details"
            image="investor charter.png"
        />
        <div className="investor-charter-body container-padding">
            <h3 className="section-subtitle">Invester Charter -stock broker</h3>

            <h3 className="tbl-header section-title">Trend of monthly disposal of complaints</h3>
            <div className="tbl-wrapper">
                <TablePrimary data={investorCharter.monthlyDisposal}/>
            </div>

            <h3 className="tbl-header section-title">Trend of annual disposal of complaints</h3>
            <div className="tbl-wrapper">
                <TablePrimary data={investorCharter.annualDisposal}/>
            </div>
        </div>
    </main>
  )
}
