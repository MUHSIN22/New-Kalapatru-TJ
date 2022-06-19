import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Screens/Home/Home'
import { Container } from '../container/Container'

export const TheLayout = () => {
  return (
    <>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Container>
    </>
  )
}
