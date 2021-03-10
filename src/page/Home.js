import React, { memo } from 'react';
import Header from '../components/organism/Header';
import Heading from '../components/organism/Heading';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Heading />
            </main>
        </>
    );
};

export default memo(Home);