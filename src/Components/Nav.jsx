import React, {useEffect} from 'react';
import Logo from '../images/logo.svg';
import DropDown from '../images/icon-arrow-down.svg';
import ArrowUp from '../images/icon-arrow-up.svg';
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
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
    <nav>
        <div className="nav-left">
            <img src={Logo} alt="Logo" />
            <ul>
                <li>
                    <button type='button'>Features</button>
                    <img src={ArrowUp} alt="Arrow up" />
                    <img src={DropDown} alt="Arrow up" />
                </li>
                <li>
                    <button type='button'>Company</button>
                    <img src={ArrowUp} alt="Arrow up" />
                    <img src={DropDown} alt="Arrow up" />
                </li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    </nav>
  )
}

export default Nav