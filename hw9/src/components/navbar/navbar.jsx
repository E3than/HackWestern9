import logo from './wai.png';
import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <img src={logo} alt='western ai logo' className='wai-logo' href="/"></img>
            <a href="/" className='site-title'>
                Youtube Sentiment Analysis
            </a>
            <ul>
                <li>
                    <a href="/about">
                        About
                    </a>
                </li>
                <li >
                    <a href="/help">
                        Help
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar