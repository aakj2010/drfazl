import React from 'react'
import './Chapters.css'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'

function Chapters() {

    return (
        <>
            <div className='chapters'>
                <Footer />
                <Outlet />
            </div>
        </>
    )
}

export default Chapters