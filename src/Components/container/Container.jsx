import React from 'react'
import Header from '../Header/Header'

export const Container = ({children}) => {
    return (
        <div>
            <Header />

            <div className='children'> 
                {children}
            </div>

        </div>
    )
}
