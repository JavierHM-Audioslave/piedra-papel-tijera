import React from "react";
import {getScore} from "../Selectors";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Score = ({result}) => {

    const scoreSelector = useSelector(getScore);
    


    return (
        <header>
            <Container>
                <Row className="mt-2 mb-3 my-sm-5 justify-content-center">
                    <Col xs={12} lg={6}>
                        <div id="score" className="d-flex justify-content-between p-3 border border-2 border-light rounded-3">
                            <div className="d-flex flex-column justify-content-center align-items-center text-light">
                                <h5>ROCK</h5>
                                <h5>PAPER</h5>
                                <h5>SCISSORS</h5>
                            </div>
                            <div className="bg-light px-5 d-flex flex-column justify-content-center align-items-center">
                                <span style={{fontSize: "1.5em"}}>Score</span>
                                <h5 className="text-muted mb-0 fw-bold scoreNumber">{scoreSelector}</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};


export default Score;