import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import purerootslogo from '../assets/logoLarge.jpg';

function Header() {

    return (
        <header>
            <div className='header-content'>
                <div className='header-logo'>
                    <img  style={{height: '100%'}} src={purerootslogo} />
                </div>
                <nav>
                    <Link className='nav-link' to={'/home'}>Home</Link>
                    <Link className='nav-link' to={'/'}>Products</Link>
                    <Link className='nav-link' to={'/'}>About</Link>
                    <Link className='nav-link' to={'/'}>Contact</Link>
                    <Link className='nav-link' to={'/'}>Product Locator</Link>
                </nav>
            </div>
        </header>
    )
}


export { Header }