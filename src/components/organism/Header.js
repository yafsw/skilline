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
`;

export default memo(Header);