import React, { memo } from 'react';
import Styled from 'styled-components';
import Button from '../atoms/Button';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import Span from '../atoms/Span';
import { IoMdPlay } from 'react-icons/io';

const Heading = () => {
    return (
        <HeadingStyle>
            <div className="heading">
                <div className="text">
                    <H1 color="#2F327D"><span className="title">Studying </span>Online is now much easier</H1>
                    <P color="#464646">Skilline is an interesting platform that will teach you in more an interactive way</P>
                    <div className="action">
                        <div className="join">
                            <Button bgcolor="#F48C06" color="white" padding="2.2rem 3.8rem">
                                Join for free
                            </Button>
                        </div>
                        <div className="play">
                            <Button>
                                <IoMdPlay className="arrow" color="#23BDEE"/>
                            </Button>
                            <Span color="#252641">Watch how it works</Span>
                        </div>
                        
                    </div>  
                </div>
                <img src="/assets/img/heading-pict.png" alt="/assets/img/heading-pict.png" />
            </div>  
        </HeadingStyle>
    );
};

const HeadingStyle = Styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFF2E1;
    border-radius: 0 0 15% 15%;
    overflow: hidden;
    padding: 0 4.8rem;

    .heading {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        max-width: 164rem;

        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-top: 15.6rem;

            .title {
                font-weight: bold;
                font-size: 5.4rem;
                color: #F48C06  ;
            }

            p {
                font-family: Nunito Sans;
                margin: 3.6rem 0;
            }

            .action {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
                flex-wrap: wrap;

                button {
                    margin-right: 3.6rem;
                }

                .join {
                    margin-bottom: 2.4rem;
                }

                .play {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;

                    button {
                        height: 8rem;
                        width: 8rem;
                        padding: 0;

                        .arrow {
                            font-size: 3.6rem;
                            margin-left: .6rem;
                        }
                    }
                }
            }   
        }

        @media(max-width: 92rem) {
            flex-direction: column;

            .text {
                margin-top: 0;
            }

            img {
                width: 100%;
            }
        }

        @media(max-width: 68rem) {
            h1 {
                line-height: 1.2;
            }
        }

        @media(max-width: 28rem) {
            .text {
                width: 100%;
                margin-bottom: 3.6rem;

                h1, .title {
                    font-size: 4.6rem;
                }

                .action {
                    .join {
                        width: 100%;

                        button {
                            width: 100%;
                            margin: 0;
                        }
                    }

                    .play {
                        width: 100%;

                        button {
                            width: 100%;
                            margin-right: 0;
                            margin-bottom: 1.2rem;
                        }

                        span {
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
`;

export default memo(Heading);