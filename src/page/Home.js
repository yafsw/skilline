import React, { memo } from 'react';
import Styled from 'styled-components';
import Companies from '../components/organism/Companies';
import Header from '../components/organism/Header';
import Heading from '../components/organism/Heading';

const Home = () => {
    return (
        <>
            <Header />
            <Main>
                <Heading />
                <Companies />
            </Main>
        </>
    );
};

    const Main = Styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`;

export default memo(Home);