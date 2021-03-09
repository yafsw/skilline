import React, { memo } from 'react';
import Styled from 'styled-components';
import Button from '../atoms/Button';
import Span from '../atoms/Span';

const Bar = () => {
    return (
        <BarStyle>
            <div>
                <Span fsize="2.2rem">Home</Span>
                <Span fsize="2.2rem">Careers</Span>
                <Span fsize="2.2rem">Blog</Span>
                <Span fsize="2.2rem">About Us</Span>
            </div>
            <div>
                <Button
                    fsize="2.2rem"
                    fweight="500"
                    color="#6C6C6C"
                    padding="1.4rem 4.8rem"
                >   Login
                </Button>
                <Button
                    fsize="2.2rem"
                    fweight="500"
                    color="#FFFFFF"
                    bgcolor="#F48C06"
                    padding="1.4rem 3.6rem"
                >   Sign Up
                </Button>
            </div>
        </BarStyle>
    );
};

const BarStyle = Styled.div`

`;

export default memo(Bar);