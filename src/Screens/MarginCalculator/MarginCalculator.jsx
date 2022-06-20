import React from 'react'
import ContactUsBlock from '../../Components/ContactUs-Block/ContactUsBlock'
import TablePrimary from '../../Components/TablePrimary/TablePrimary'
import marginList from '../../JSON DB/marginList'
import './MarginCalculator.css'

export default function MarginCalculator() {
    return (
        <main className="margin-calculator-page">
            <section className="margin-banner container-padding">
                <div className="content-section">
                    <h1 className="main-title">Margin Calculator</h1>
                    <h3 className="section-subtitle">You can enter your equity stock position and determine your required margin using the equity margin calculator.</h3>
                </div>
                <div className="banner-img-wrapper">
                    <img src="/images/margin calculator/banner.png" alt="" className="banner-img" />
                </div>
            </section>

            <section className="table-section container-padding">
                <div className="tbl-btns-wrapper">
                    <button className="btn-tbl">NSE Cash</button>
                    <span className="v-line-red"></span>
                    <button className="btn-tbl">MTF</button>
                    <span className="v-line-red"></span>
                    <button className="btn-tbl">NSF F&O</button>
                    <span className="v-line-red"></span>
                    <button className="btn-tbl">MCX</button>
                    <span className="v-line-red"></span>
                    <button className="btn-tbl">MTF vs FUT</button>
                </div>
                <div className="table-wrapper">
                    <TablePrimary data={marginList.nse}/>
                </div>
            </section>

            <section className="contact-container container-padding">
                <ContactUsBlock />
            </section>

        </main>
    )
}
