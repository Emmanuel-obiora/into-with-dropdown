import React, {useState} from 'react';
import Logo from '../images/logo.svg';
import DropDown from '../images/icon-arrow-down.svg';
import { Link } from "react-router-dom";
import Company from './Company';
import Features from './Features';
import Modal from './Modal';
import CloseNavM from '../images/icon-close-menu.svg';
import OpenNavM from '../images/icon-menu.svg';
import Modal2 from './Modal2';

const Nav = () => {
    const [companyDrop, setCompanyDrop] = useState(false);
    const [featureDrop, setFeatureDrop] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const flipDrop = () => {
        setCompanyDrop(!companyDrop);

        if(companyDrop){
            document.getElementById('CDown').parentNode.classList.remove('active');
            document.getElementById('Modal').classList.remove('modal-active');
        } else{
            document.getElementById('CDown').parentNode.classList.add('active');
            document.getElementById('Modal').classList.add('modal-active');
        }
    };

    const flipFDrop = () => {
        setFeatureDrop(!featureDrop);

        if(featureDrop){
            document.getElementById('FDown').parentNode.classList.remove('active');
            document.getElementById('Modal').classList.remove('modal-active');
        } else{
            document.getElementById('FDown').parentNode.classList.add('active');
            document.getElementById('Modal').classList.add('modal-active');
        }
    };

    const closeOpenNav = () => {
        setCompanyDrop(false);
        setFeatureDrop(false);
        document.getElementById('FDown').parentNode.classList.remove('active');
        document.getElementById('CDown').parentNode.classList.remove('active');
        document.getElementById('Modal').classList.remove('modal-active');
    };

    const closeFOpenNav = () => {
        setFeatureDrop(false);
        document.getElementById('FDown').parentNode.classList.remove('active');
    };

    const closeCOpenNav = () => {
        setCompanyDrop(false);
        document.getElementById('CDown').parentNode.classList.remove('active');
    };

    const mobileNavToggle = () => {
        setMobileNav(!mobileNav);

        if(mobileNav){
            document.getElementById('Navigation').classList.remove('active-mobile-open');
            document.getElementById('Closing').classList.remove('modall-active');
            document.getElementById('Modal').classList.remove('modal-active');
        } else {
            document.getElementById('Navigation').classList.add('active-mobile-open');
            document.getElementById('Closing').classList.add('modall-active');
        }
    }
    
  return (
    <>
    <header className='header'>
        <Link to='/home'>
            <img src={Logo} alt="Logo" onClick={closeOpenNav} />
        </Link>
        <nav className='nav' id='Navigation'>
            <img src={CloseNavM} id='MNClose' onClick={mobileNavToggle} alt="" />
            <div className="nav-left">
                <ul>
                    <li className='change'>
                        <div className="change-top" onClick={()=>{flipFDrop(); closeCOpenNav();}}>
                            <Link to='/features' className='nav-color' >Features</Link>
                            <img src={DropDown} alt="Arrow down" id='FDown' />
                        </div>
                        <Features data={featureDrop}/>
                    </li>
                    <li className='change'>
                        <div className="change-top" onClick={()=>{flipDrop(); closeFOpenNav();}}>
                            <Link to='/company' className='nav-color' >Company</Link>
                            <img src={DropDown} alt="Arrow down" id='CDown' />
                        </div>
                        <Company data={companyDrop} />
                    </li>
                    <li><Link to="/careers" className='nav-color' onClick={closeOpenNav}>Careers</Link></li>
                    <li><Link to="/about" className='nav-color' onClick={closeOpenNav}>About</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <Link to="/login" className='nav-color' onClick={closeOpenNav}>Login</Link>
                <Link to="/register" className='nav-color color2' onClick={closeOpenNav}>Register</Link>
            </div>
        </nav>
        <img src={OpenNavM} onClick={mobileNavToggle} alt="" />
    </header>
    <Modal close={closeOpenNav}/>
    <Modal2 data={mobileNavToggle} deactivate={closeOpenNav} />
    </>
  )
}

export default Nav