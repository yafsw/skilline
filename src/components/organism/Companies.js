import React, { memo } from 'react';
import Styled from 'styled-components';
import P from '../atoms/P';

const Companies = () => {
    return (
        <CompaniesStyle>
            <P fsize="2.8rem" fweight="500" color="#696984" align="center">
                Trusted by 5.000+ Companies Worldwide
            </P>
        </CompaniesStyle>
    );
};

const CompaniesStyle = Styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 128rem;
    padding: 4.8rem;
`;

export default memo(Companies);