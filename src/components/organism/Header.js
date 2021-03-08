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
    height: 20rem;
    padding: 2.4rem;
`;

export default memo(Header);