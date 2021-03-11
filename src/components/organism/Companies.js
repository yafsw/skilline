import React, { memo } from 'react';
import Styled from 'styled-components';
import P from '../atoms/P';

const Companies = () => {
    return (
        <CompaniesStyle>
            <P fweight="500" fsize="2.8rrem" color="#696984">
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
`;

export default memo(Companies);