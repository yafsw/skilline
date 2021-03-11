import React, { memo } from 'react';
import Companies from '../components/organism/Companies';
import Header from '../components/organism/Header';
import Heading from '../components/organism/Heading';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Heading />
                <Companies />
            </main>
        </>
    );
};

export default memo(Home);