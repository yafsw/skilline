import React, { memo } from 'react';
import Styled from 'styled-components';

const Logo = () => {
    return (
        <LogoStyle>

        </LogoStyle>
    );
};

const LogoStyle = Styled.span`
    font-size: 3.2rem;
`;

export default memo(Logo);