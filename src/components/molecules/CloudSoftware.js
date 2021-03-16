import React, { memo } from 'react';
import Styled from 'styled-components';
import H3 from '../atoms/H3';       
import P from '../atoms/P';

const CloudSoftware = props => {
    return (
        <CloudSoftwareStyle>
            <div className="img">
                <Img bgimg={props.bgimg}>
                    <img src={props.img} alt={props.img} />
                </Img>
            </div>
            <div className="text">
                <H3 fsize="3rem" color="#2F327D" fweight="500" align="center">{props.h3}</H3>
                <P fsize="2rem" color="#696984" align="center">{props.p}</P>
            </div>
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
    background-color: white;
    position: relative;

    .img {
        width: 100%;
        display: flex;
        flex-direction: center;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -5rem;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 12.8rem 4.8rem 6rem;
    }

    @media(max-width: 48rem) {
        height: auto;

        h3 {
            margin-bottom: 2.4rem;
        }

        &:nth-child(2), &:nth-child(3) {
            margin-top: 5.6rem;
        }
    }
`;

const Img = Styled.div`
    display:  flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.bgimg ? props.bgimg : 'black'};
    width: 10rem;
    height: 10rem;
    box-shadow: 0px 10px 40px rgba(54, 61, 136, 0.06);
    padding: 1.2rem;
    border-radius: 10rem;
    transition: .3s ease-in-out;

    &:hover {
        box-shadow: 0px 16px 40px rgba(37, 44, 113, 0.1);   
    }
`;

export default memo(CloudSoftware);