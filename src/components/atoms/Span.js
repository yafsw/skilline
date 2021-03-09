import React, { memo } from 'react';
import Styled from 'styled-components';

const Span = props => {
    return (
        <SpanStyle
            bgcolor={props.bgcolor}
            padding={props.padding}
            fweight={props.fweight}
            border={props.border}
            fsize={props.fsize}
            color={props.color}
            radius={props.radius}
        >   {props.children}
        </SpanStyle>
    );
};

const SpanStyle = Styled.span`
    background-color: ${props => props.bgcolor ? props.bgcolor : 'transparent'};
    padding: ${props => props.padding ? props.padding : '0'};
    font-weight: ${props => props.fweight ? props.fweight : 'normal'};
    font-size: ${props => props.fsize ? props.fsize : '2.4rem'};
    border: ${props => props.border ? props.border : 'none'};
    color: ${props => props.color ? props.color : 'black'};
    border-radius: ${props => props.radius ? props.radius : '0'};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease-in-out;
`;

export default memo(Span);