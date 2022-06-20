import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../../Screens/Blog/Blog'
import ContactPage from '../../Screens/ContactPage/ContactPage'
import Home from '../../Screens/Home/Home'
import MarginCalculator from '../../Screens/MarginCalculator/MarginCalculator'
import Payment from '../../Screens/Payment/Payment'
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
          </Routes>
        </Container>
    </>
  )
}
