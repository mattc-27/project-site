import React from 'react';
import './style.css'


export default function App() {

    return (
        <>
            <header>
                <div className='header-content'>
                    <div className='header-logo'>
                        <h2>PurRoots</h2>
                    </div>
                    <nav>
                        <a className='nav-link' href='/'>Home</a>

                    </nav>
                </div>
            </header>
            <div className='main'>
                <div className='title'>
                    <h1>Hello world</h1>
                </div>
            </div>
        </>
        /* <div className='main'>
                 <div className='title'>
                     <h1>Hello world</h1>
                 </div>
             </div> */
    );
}