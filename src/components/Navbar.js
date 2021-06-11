import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                     Glasgow Raptors <i className="fas fa-football-ball"></i>   
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}> </i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/our-team' className='nav-links' onClick={closeMobileMenu}>
                                Our Team  
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/updates' className='nav-links' onClick={closeMobileMenu}>
                                Updates 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/join-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Join Us  
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
