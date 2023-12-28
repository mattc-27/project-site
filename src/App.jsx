import React from 'react';

import { Wrapper } from './Wrapper';
import logoLarge  from './logoLarge.jpg';

import './style.css';


export default function App() {

 /*   const [homeImg, setHomeImg] = useState({})

    useEffect(() => {
        async function imgTest() {
            setHomeImg(logoLarge);
        }
        imgTest()
    }, []) */

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
                <div className='title m-2' style={{border: '1px solid #fff'}}>
                    <h1>Hello world</h1>
                    <img style={{height: '50%', margin: '2%'}} src={logoLarge} />
                </div>
                <Wrapper />
            </div>
        </>
        /* <div className='main'>
                 <div className='title'>
                     <h1>Hello world</h1>
                 </div>
             </div> */
    );
}