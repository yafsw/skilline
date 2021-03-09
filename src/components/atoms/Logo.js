import React, { memo } from 'react';
import Styled from 'styled-components';

const Logo = () => {
    return (
        <LogoStyle>
            <div></div>
            <span>Skilline</span>
        </LogoStyle>
    );
};

const LogoStyle = Styled.div`
    position: relative;

    span {
        font-size: 3.2rem;
        color: black;
        letter-spacing: 0.16rem;
        font-weight: 700;
        position: absolute;
        top: 50%;
        line-height: 0;
        left: 50%;
    }

    div {
        width: 5.8rem;
        height: 5.8rem;
        border-radius: .6rem;
        background-color: #65DAFF;
        transform: rotate(45deg);
        position: relative;
        left: 1.6rem;
    }
`;

export default memo(Logo);