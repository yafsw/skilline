import React, { memo } from 'react';
import Styled from 'styled-components';
import H2 from '../atoms/H2';
import P from '../atoms/P';

const WhatSkilline = () => {
    return (
        <WhatSkillineStyle>
            <H2 color="#2F327D" align="center">What is <span className="title">Skilline?</span></H2>
            <P color="#696984" align="center">
                Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            </P>
        </WhatSkillineStyle>
    );
};

const WhatSkillineStyle = Styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 6.4rem 4.8rem;

        .title {
            font-weight: bold;
            font-size: 3.6rem;
            color: #F48C06;
        }

        p {
            margin: 3.6rem 0 12rem;
            max-width: 104rem;
        }
`;

export default memo(WhatSkilline);