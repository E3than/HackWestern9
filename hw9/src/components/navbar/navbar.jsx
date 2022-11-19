import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href="/" className='site-title'>
                Youtube Bot Detector
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