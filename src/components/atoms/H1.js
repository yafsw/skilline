import React, { memo } from 'react';
import Styled from 'styled-components';

const H1 = props => {
    return (
        <H1Style
            fweight={props.fweight}
            fsize={props.fsize}
            color={props.color}
            alig={props.align}
        >   {props.children}
        </H1Style>
    );
};

const H1Style = Styled.h1`
    font-weight: ${props => props.fweight ? props.fweight : 'bold'};
    font-size: ${props => props.fsize ? props.fsize : '5.4rem'};
    color: ${props => props.color ? props.color : 'black'};
    text-align: ${props => props.align ? props.align : 'left'};
`;  

export default memo(H1);