import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../../Screens/Blog/Blog'
import ContactPage from '../../Screens/ContactPage/ContactPage'
import Home from '../../Screens/Home/Home'
import InvestorCharter from '../../Screens/InvestorCharter/InvestorCharter'
import InvestorCorner from '../../Screens/InvestorCorner/InvestorCorner'
import MarginCalculator from '../../Screens/MarginCalculator/MarginCalculator'
import Payment from '../../Screens/Payment/Payment'
import PrivacyPolicy from '../../Screens/PrivacyPolicy/PrivacyPolicy'
import Services from '../../Screens/Services/Services'
import { Container } from '../container/Container'

export const TheLayout = () => {
  return (
    <>
        <Container>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/margin-calculator' element={<MarginCalculator/>} />
            <Route path='/contact-us' element={<ContactPage/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path="/advisory-of-investors" element={<InvestorCorner/>} />
            <Route path="/investor-charter" element={<InvestorCharter/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Container>
    </>
  )
}
