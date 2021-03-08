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
                    <Span>Home</Span>
                    <Span>Careers</Span>
                    <Span>Blog</Span>
                    <Span>About Us</Span>
                </div>
                <div>
                    <Button>Login</Button>
                    <Button>Sign Up</Button>
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
    max-width: 144rem;
`;

export default memo(Nav);