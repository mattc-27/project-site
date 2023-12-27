import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';

export function Layout() {

    return (
        <div className='main'>
        <Header />
           <Outlet />
        </div>
    );
}
