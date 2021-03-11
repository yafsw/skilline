import React, { memo } from 'react';
import Styled from 'styled-components';
import H3 from '../atoms/H3';       
import P from '../atoms/P';

const CloudSoftware = props => {
    return (
        <CloudSoftwareStyle>
            <H3 fsize="3rem" color="#2F327D" fweight="500">{props.h3}</H3>
            <P fsize="2rem" color="#696984">{props.p}</P>
        </CloudSoftwareStyle>
    );
};

const CloudSoftwareStyle = Styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;

export default memo(CloudSoftware);