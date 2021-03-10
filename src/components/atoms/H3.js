import React, { memo } from 'react';
import Styled from 'styled-components';

const H3 = props => {
    return (
        <H3Style
            fweight={props.fweight}
            fsize={props.fsize}
            color={props.color}
            align={props.align}
        >   {props.children}
        </H3Style>
    );
};

const H3Style = Styled.h3`
    font-weight: ${props => props.fweight ? props.fweight : 'bold'};
    font-size: ${props => props.fsize ? props.fsize : '2.8rem'};
    color: ${props => props.color ? props.color : 'black'};
    text-align: ${props => props.align ? props.align : 'left'};
`;  

export default memo(H3);