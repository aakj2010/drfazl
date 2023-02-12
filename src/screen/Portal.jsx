import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
// import SideBar from '../layout/SideBar';


function Portal() {

    return (
        <div id="wrapper">
            <Header />
            <div id="content-wrapper" className="d-flex flex-column">
                {/* <SideBar /> */}
                <div id='content'>



                </div>
            </div>
            <Footer />
            <Outlet />
        </div>
    )
}

export default Portal;