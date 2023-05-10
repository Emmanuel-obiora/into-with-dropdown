import React from 'react';
import './MainLayout.css';
import Nav from '../Nav';
import Footer from '../Footer';

const MainLayout = ({children}) => {
    return (
        <main className='main'>
            <Nav />
            <div>{children}</div>
            <Footer />
        </main>
    )
}

export default MainLayout
