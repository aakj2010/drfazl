import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';


function Portal() {
    return (
        <div id="wrapper">
            <Header />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id='content'>



                </div>
                <Footer />
            </div>
            <Outlet />
        </div>
    )
}

export default Portal;