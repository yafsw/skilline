import React, { memo } from 'react';
import Styled from 'styled-components';

const Button = props => {
    return (
        <ButtonStyle
            bgcolor={props.bgcolor}
            padding={props.padding}
            fweight={props.fweight}
            border={props.border}
            fsize={props.fsize}
            color={props.color}
        >   {props.children}
        </ButtonStyle>
    );
};

const ButtonStyle = Styled.button`
    background-color: ${props => props.bgcolor ? props.bgcolor : 'white'};
    padding: ${props => props.padding ? props.padding : '1.2rem 3.6rem'};
    font-weight: ${props => props.fweight ? props.fweight : 'normal'};
    font-size: ${props => props.fsize ? props.fsize : '2.4rem'};
    border: ${props => props.border ? props.border : 'none'};
    color: ${props => props.color ? props.color : 'black'};
    border-radius: 8rem;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease-in-out;

    &:hover {
        box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.03);
    }
`;

export default memo(Button);