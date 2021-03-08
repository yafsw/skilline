import React, { memo } from 'react';
import Styled from 'styled-components';
import Nav from '../molecules/Nav';

const Header = () => {
    return (
        <HeaderStyle>
            <Nav />
        </HeaderStyle>
    );
};

const HeaderStyle = Styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFF2E1;
    min-height: 20rem;
    padding: 2.4rem;

    @media(max-width: 64rem) {
        min-height: 0;
    }
`;

export default memo(Header);