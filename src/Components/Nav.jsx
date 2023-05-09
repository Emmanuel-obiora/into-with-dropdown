import React, {useState} from 'react';
import Logo from '../images/logo.svg';
import DropDown from '../images/icon-arrow-down.svg';
import { Link } from "react-router-dom";
import Company from './Company';
import Features from './Features';
import Modal from './Modal';

const Nav = () => {
    const [companyDrop, setCompanyDrop] = useState(false);
    const [featureDrop, setFeatureDrop] = useState(false);

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
    
  return (
    <>
    <nav className='nav'>
        <div className="nav-left">
            <Link to='/home'>
                <img src={Logo} alt="Logo" onClick={closeOpenNav} />
            </Link>
            <ul>
                <li className='change' onClick={()=>{flipFDrop(); closeCOpenNav();}}>
                    <Link to='/features' className='nav-color' >Features</Link>
                    <img src={DropDown} alt="Arrow down" id='FDown' />
                    <Features data={featureDrop}/>
                </li>
                <li className='change' onClick={()=>{flipDrop(); closeFOpenNav();}}>
                    <Link to='/company' className='nav-color' >Company</Link>
                    <img src={DropDown} alt="Arrow down" id='CDown' />
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
    <Modal close={closeOpenNav}/>
    </>
  )
}

export default Nav