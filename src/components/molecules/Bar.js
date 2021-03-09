import React, { memo } from 'react';
import Styled from 'styled-components';
import Button from '../atoms/Button';
import Span from '../atoms/Span';
import { useApp } from '../../cotext';

const Bar = () => {
    const { state } = useApp();

    return (
        <BarStyle bar={state.bar}>
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
    display: ${props => props.bar ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 3.6rem;
    transition: .3s ease-in-out;

    @media(min-width: 68rem) {
        display: none;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;

        span {
            margin-bottom: 1.2rem;
        }

        button {
            width: 100%;
            margin-top: 1.2rem;
        }
    }
`;

export default memo(Bar);