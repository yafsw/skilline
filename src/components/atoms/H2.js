import React, { memo } from 'react';
import Styled from 'styled-components';

const H2 = props => {
    return (
        <H2Style
            fweight={props.fweight}
            fsize={props.fsize}
            color={props.color}
            alig={props.align}
        >   {props.children}
        </H2Style>
    );
};

const H2Style = Styled.h2`
    font-weight: ${props => props.fweight ? props.fweight : 'bold'};
    font-size: ${props => props.fsize ? props.fsize : '3.6rem'};
    color: ${props => props.color ? props.color : 'black'};
    text-align: ${props => props.align ? props.align : 'left'};
`;  

export default memo(H2);