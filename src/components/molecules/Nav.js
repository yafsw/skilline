import React, { memo } from 'react';
import Styled from 'styled-components';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import Span from '../atoms/Span';

const Nav = () => {
    return (
        <NavStyle>
            <div>
                <Logo />
            </div>
            <div>
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
            </div>
        </NavStyle>
    );
};

const NavStyle = Styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 164rem;

    div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            display: flex;
            justify-content: center;
            align-items: center;

            @media(max-width: 64rem) {
                display: none;
            }

            span {
                margin-right: 7.2rem;

                @media(max-width: 84rem) {
                    margin-right: 4.8rem;
                }
            }   

            button:first-child {
                margin-right: 3.2rem;

                @media(max-width: 84rem) {
                    margin-right: 2.4rem;
                }
            }
        }
    }
`;

export default memo(Nav);