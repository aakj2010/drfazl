import React from 'react'
import './Chapters.css'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

function Chapters() {

    return (
        <>
            <div className='chapters'>
                <Header />

                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Chapters