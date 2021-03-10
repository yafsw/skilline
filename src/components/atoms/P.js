import React, { memo } from 'react';
import Styled from 'styled-components';

const P = props => {
    return (
        <PStyle
            fweight={props.fweight}
            fsize={props.fsize}
            color={props.color}
            align={props.align}
        >   {props.children}
        </PStyle>
    );
};

const PStyle = Styled.p`
    font-weight: ${props => props.fweight ? props.fweight : 'normal'};
    font-size: ${props => props.fsize ? props.fsize : '2.4rem'};
    color: ${props => props.color ? props.color : 'black'};
    text-align: ${props => props.align ? props.align : 'left'};
`;

export default memo(P);