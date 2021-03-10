import React, { memo, useEffect, useState } from 'react';
import Styled from 'styled-components';
import Bar from '../molecules/Bar';
import Nav from '../molecules/Nav';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
                ? setScroll(true)
                : setScroll(false)
        }
    });

    return (
        <HeaderStyle scroll={scroll}>
            <Nav />
            <Bar />
        </HeaderStyle>
    );
};

const HeaderStyle = Styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFF2E1;
    min-height: ${props => props.scroll ? '0' : '20rem'};
    box-shadow: ${props => props.scroll ? '0px 20px 24px rgba(0, 0, 0, 0.03)' : null};
    padding: 2.4rem;
    transition: .3s ease-in-out;
    position: sticky;
    top: 0;
    z-index: 999;

    @media(max-width: 68rem) {
        min-height: 0;
        padding: 2.4rem 1.2rem;
    }
`;

export default memo(Header);