import React from 'react';
import Databiz from '../images/client-databiz.svg';
import Audiophile from '../images/client-audiophile.svg';
import Meet from '../images/client-meet.svg';
import Maker from '../images/client-maker.svg';
import MainLayout from './Layout/MainLayout';


const Home = () => {
  return (
    <MainLayout>
        <div className="main-left">
            <div className="main-left-top">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.</p>
                <button type='button'>Learn more</button>
            </div>
            <span>
                <img src={Databiz} alt="Databiz" />
                <img src={Audiophile} alt="Audiophile" />
                <img src={Meet} alt="Meet" />
                <img src={Maker} alt="Maker" />
            </span>
        </div>
        <div className="main-right"></div>
    </MainLayout>
  )
}

export default Home