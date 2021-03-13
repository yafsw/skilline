import React, { memo } from 'react';
import Styled from 'styled-components';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import CloudSoftware from '../molecules/CloudSoftware';

const AIO = () => {
    return (
        <AIOStyle>
            <H2 color="#2F327D" align="center">All-In-One <span className="title">Cloud Software.</span></H2>
            <P color="#696984" align="center">
                Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </P>
            <div className="cloud-software">
                <CloudSoftware
                    h3="Online Billing, Invoicing, & Contracts"
                    p="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
                />
                <CloudSoftware
                    h3="Easy Scheduling & Attendance Tracking"
                    p="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
                />
                <CloudSoftware
                    h3="Customer Tracking"
                    p="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization      "
                />
            </div>
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

    .cloud-software {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
        grid-auto-rows: 43rem;
        place-items: center;
        grid-gap: 5.6rem;
        width: 100%;
        max-width: 148rem;

        p {
            margin: 0;
        }
    }
`;

export default memo(AIO);