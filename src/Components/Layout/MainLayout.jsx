import React from 'react';
import './MainLayout.css';
import Nav from '../Nav';
import Footer from '../Footer';

const MainLayout = ({children}) => {
    return (
        <div className='main'>
            <Nav />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout
