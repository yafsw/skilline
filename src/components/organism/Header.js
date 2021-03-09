import React, { memo } from 'react';
import Styled from 'styled-components';
import Bar from '../molecules/Bar';
import Nav from '../molecules/Nav';

const Header = () => {
    return (
        <HeaderStyle>
            <Nav />
            <Bar />
        </HeaderStyle>
    );
};

const HeaderStyle = Styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFF2E1;
    min-height: 20rem;
    padding: 2.4rem;
    transition: .3s ease-in-out;

    @media(max-width: 68rem) {
        min-height: 0;
        padding: 2.4rem 1.2rem;
    }
`;

export default memo(Header);