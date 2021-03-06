import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-1.png';

import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true); 

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="logo"/> &nbsp;Glasgow Raptors 
                    </Link>
                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}> </i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT US
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/updates' className='nav-links' onClick={closeMobileMenu}>
                             UPDATES
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/join-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                                JOIN US  
                            </Link>
                        </li>
                    </ul> 
                    {button && <Button buttonStyle='btn--outline'>JOIN US</Button> }        
                </div>   
            </nav> 
        </>
    )
}

export default Navbar
