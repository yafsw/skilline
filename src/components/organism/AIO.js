import React, { memo } from 'react';
import Styled from 'styled-components';
import H2 from '../atoms/H2';
import P from '../atoms/P';

const AIO = () => {
    return (
        <AIOStyle>
            <H2 color="#2F327D" align="center">All-In-One <span className="title">Cloud Software.</span></H2>
            <P color="#696984" align="center">
                Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </P>
        </AIOStyle>
    );
};

const AIOStyle = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 4.8rem;

    .title {
        font-weight: bold;
        font-size: 3.6rem;
        color: #F48C06;
    }

    p {
        margin: 3.6rem 0;
        max-width: 84rem;
    }
`;

export default memo(AIO);