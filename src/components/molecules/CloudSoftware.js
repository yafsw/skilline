import React, { memo } from 'react';
import Styled from 'styled-components';
import H3 from '../atoms/H3';       
import P from '../atoms/P';

const CloudSoftware = props => {
    return (
        <CloudSoftwareStyle>
            <div bgimg={props.bgimg}>
                <img src={props.img} alt={props.img} />
            </div>
            <H3 fsize="3rem" color="#2F327D" fweight="500" align="center">{props.h3}</H3>
            <P fsize="2rem" color="#696984" align="center">{props.p}</P>
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
    padding: 14.8rem 4.8rem 4.8rem;
    position: relative;

    div {
        display: flex;
        flex-direction: center;
        align-items: center;
        postition: absolute;
        background: ${props => props.bgimg ? props.bgimg : 'black'}:
        width: 10rem;
        height: 10rem;
        box-shadow: 0px 10px 40px rgba(54, 61, 136, 0.06);
        padding: 1.2rem;
        border-radius: 10rem;

        &:hover {
            box-shadow: 0px 16px 40px rgba(37, 44, 113, 0.1);
        }
    }
`;

export default memo(CloudSoftware);