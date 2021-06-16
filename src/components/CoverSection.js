import React from 'react'
import '../App.css';
import { Button } from './Button';
import './CoverSection.css';
import covervideo from '../assets/videos/vid-01.mp4';

function CoverSection() {
    return (
        <div className='cover-container'>
            <video src={covervideo} preload autoPlay muted loop playsInline /> 
            <h1>Welcome to</h1>
            <h2>Glasgow Raptors</h2>
            <h3> LGBTQ+ Inclusive Rugby Club</h3>
            <div className="cover-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>JOIN US</Button>
            
            </div>
        </div>
    )
}

export default CoverSection;
