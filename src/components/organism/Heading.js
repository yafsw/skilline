import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';

const Heading = () => {
    return (
        <HeadingStyle>
            <H1>Studying Online is now much easier</H1>
            <P>Skilline is an interesting platform that will teach you in more an interactive way</P>
        </HeadingStyle>
    );
};

const HeadingStyle = Styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFF2E1;
`;

export default memo(Heading);