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
    justify-content: space-between;
    height: 43rem;
    border-radius: 2rem;
    box-shadow: 0px 10px 60px rgba(38, 45, 118, 0.08);
    padding: 4.8rem;
`;

export default memo(CloudSoftware);