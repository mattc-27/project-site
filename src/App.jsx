import React from 'react';

import {
    createRoutesFromElements,
    Route,
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import './style.css';

import { Layout } from './components/layout';
import { Home } from './Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
         {
            children: [
                {index: true, element: <Home />}
            ]
         }
        ]
    }
])

export default function App() {

    return (
        <RouterProvider router={router} />
    );
}