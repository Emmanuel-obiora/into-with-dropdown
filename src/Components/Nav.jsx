import React, {useState, useEffect} from 'react';
import Logo from '../images/logo.svg';
import DropDown from '../images/icon-arrow-down.svg';
import { Link, useLocation } from "react-router-dom";
import Company from './Company';
import Features from './Features';

const Nav = () => {
    const [companyDrop, setCompanyDrop] = useState(false);
    const [featureDrop, setFeatureDrop] = useState(false);

    const flipDrop = () => {
        setCompanyDrop(!companyDrop);

        if(companyDrop){
            document.getElementById('CDown').parentNode.classList.remove('active');
        } else{
            document.getElementById('CDown').parentNode.classList.add('active');
        }
    };

    const flipFDrop = () => {
        setFeatureDrop(!featureDrop);

        if(featureDrop){
            document.getElementById('FDown').parentNode.classList.remove('active');
        } else{
            document.getElementById('FDown').parentNode.classList.add('active');
        }
    };

    const location = useLocation();
    useEffect(() => {
        // console.log('location', location.pathname);

        if(location.pathname.includes('/home')){
        //   const head = document.getElementById('Head');
        //   const taken = document.getElementById('depoReceipt');
        //   const takes = document.getElementById('manageChq');
        //   const retrieved = document.getElementById('retrievedData');
      
        //   takes.classList.add('active-bar');
        //   taken.classList.remove('activeness');
        //   head.innerHTML="Manager's cheque";
        //   retrieved.classList.remove('active_re');
        }

         if(location.pathname.includes('/careers')){
        //   const head = document.getElementById('Head');
        //   const taken = document.getElementById('depoReceipt');
        //   const takes = document.getElementById('manageChq');
        //   const retrieved = document.getElementById('retrievedData');
      
        //   takes.classList.remove('active-bar');
        //   taken.classList.add('activeness');
        //   head.innerHTML="Deposit Receipt";
        //   retrieved.classList.remove('active_re');
        }

        else if(location.pathname.includes('/login')){
        //   const head = document.getElementById('Head');
        //   const taken = document.getElementById('depoReceipt');
        //   const takes = document.getElementById('manageChq');
        //   const retrieved = document.getElementById('retrievedData');
      
        //   takes.classList.remove('active-bar');
        //   taken.classList.remove('activeness');
        //   head.innerHTML="Deposit History";
        //   retrieved.classList.add('active_re');
        }
    }, [location.pathname]);
    
  return (
    <nav className='nav'>
        <div className="nav-left">
            <Link to='/home'>
                <img src={Logo} alt="Logo" />
            </Link>
            <ul>
                <li className='change'>
                    <Link to='/features' className='nav-color' onClick={flipFDrop}>Features</Link>
                    <img src={DropDown} alt="Arrow down" id='FDown' />
                    <Features data={featureDrop}/>
                </li>
                <li className='change'>
                    <Link to='/company' className='nav-color' onClick={flipDrop} >Company</Link>
                    <img src={DropDown} alt="Arrow down" id='CDown' />
                    <Company data={companyDrop} />
                </li>
                <li><Link to="/careers" className='nav-color'>Careers</Link></li>
                <li><Link to="/about" className='nav-color'>About</Link></li>
            </ul>
        </div>
        <div className="nav-right">
            <Link to="/login" className='nav-color'>Login</Link>
            <Link to="/register" className='nav-color color2'>Register</Link>
        </div>
    </nav>
  )
}

export default Nav