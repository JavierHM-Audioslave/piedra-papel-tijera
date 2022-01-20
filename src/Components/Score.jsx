import React from "react";
import {getScore} from "../Selectors";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const Score = ({result}) => {

    const scoreSelector = useSelector(getScore);
    


    return (
        <header>
            <Container>
                <Row className="my-5 justify-content-center">
                    <Col xs={12} lg={6}>
                        <div id="score" className="d-flex justify-content-between p-4 border border-2 border-light rounded-3">
                            <div className="d-flex flex-column justify-content-center align-items-center text-light">
                                <h2>ROCK</h2>
                                <h2>PAPER</h2>
                                <h2>SCISSORS</h2>
                            </div>
                            <div className="bg-light px-5 py-1 d-flex flex-column justify-content-center align-items-center">
                                <p>Score</p>
                                <p className="text-muted mb-0 fw-bold scoreNumber">{scoreSelector}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};


export default Score;