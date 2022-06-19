import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Screens/Home/Home'
import Header from '../Header/Header'

export const Container = ({children}) => {
    return (
        <div>
            <Header />

            <div className='children'> 
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </div>

        </div>
    )
}
