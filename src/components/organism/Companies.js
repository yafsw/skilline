import React, { memo } from 'react';
import Styled from 'styled-components';
import P from '../atoms/P';

const Companies = () => {
    return (
        <CompaniesStyle>
            <P fsize="2.8rem" fweight="500" color="#696984" align="center">
                Trusted by 5.000+ Companies Worldwide
            </P>
            <div>
                <img src="/assets/img/google.png" alt="/assets/img/google.png" />
                <img src="/assets/img/netflix.png" alt="/assets/img/netflix.png" />
                <img src="/assets/img/airbnb.png" alt="/assets/img/airbnb.png" />
                <img src="/assets/img/amazon.png" alt="/assets/img/amazon.png" />
                <img src="/assets/img/facebook.png" alt="/assets/img/facebook.png" />
                <img src="/assets/img/grab.png" alt="/assets/img/grab.png" />
            </div>
        </CompaniesStyle>
    );
};

const CompaniesStyle = Styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 148rem;
    padding: 4.8rem;

    p {
        margin-bottom: 3.6rem;
    }

    div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        grid-auto-rows: 8rem;
        place-items: center;
        grid-gap: 1.2rem;
        justify-items: center;
        width: 100%;

        img:nth-child(3) {
            margin-bottom: .8rem;
        }

        img:nth-child(5) {
            margin-bottom: 1rem;
        }

        img:nth-child(6) {
            margin-bottom: 1.8rem;
        }

        img:nth-child(4) {
            margin-top: 1.8rem;
        }
    }
`;

export default memo(Companies);