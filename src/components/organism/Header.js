import React, { memo } from 'react';
import Styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyle>

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