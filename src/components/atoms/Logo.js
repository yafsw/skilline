import React, { memo } from 'react';
import Styled from 'styled-components';

const Logo = () => {
    return (
        <LogoStyle>
            Skilline
        </LogoStyle>
    );
};

const LogoStyle = Styled.span`
    font-size: 3.2rem;
    color: black;
    letter-spacing: 0.04rem;
    font-weight: 700;
`;

export default memo(Logo);