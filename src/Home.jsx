import React, { useEffect, useState } from 'react';
import { Wrapper, CardListHome, InfoHorizontal, InfoVertical } from './components/home';

function Home() {

    return (
        <div style={{ height: '100vh', margin: '0', display: 'flex', flexDirection: 'column' }}>
            <Wrapper />
            <CardListHome />
            <InfoHorizontal />
            <InfoVertical />
        </div>
    )
}


export { Home }