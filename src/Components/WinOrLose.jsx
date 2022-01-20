import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import { setEnable } from "../Helpers/General";
import {setScoreSum1, setScoreMinus1, setNewScore} from "../Actions/scoreActions";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"


const WinOrLose = ({userSelection, machineSelection}) => {

    const [result, setResult] = useState("");

    const dispatch = useDispatch();


    useEffect(() => {

        if(userSelection === "papel") {

            if(machineSelection === 0) {
                setResult("TIE");
            }
            if(machineSelection === 1) {
                setResult("YOU LOSE");
                dispatch(setScoreMinus1());
            }
            if(machineSelection === 2) {
                setResult("YOU WIN");
                dispatch(setScoreSum1());
            }
        };

        if(userSelection === "tijera") {

            if(machineSelection === 0) {
                setResult("YOU WIN");
                dispatch(setScoreSum1());
            }
            if(machineSelection === 1) {
                setResult("TIE")
            }
            if(machineSelection === 2) {
                setResult("YOU LOSE");
                dispatch(setScoreMinus1());
            }
        };

        if(userSelection === "piedra") {

            if(machineSelection === 0) {
                setResult("YOU LOSE");
                dispatch(setScoreMinus1());
            }
            if(machineSelection === 1) {
                setResult("YOU WIN");
                dispatch(setScoreSum1());
            }
            if(machineSelection === 2) {
                setResult("TIE");
            }
        }
    },[machineSelection]);




    return (
        <div id="oneOnOneContainer" className="d-flex flex-column justify-content-center align-items-center ms-5">
            <div>
                {<p className="fs-1 fw-bold text-center text-light">{`${result}`}</p>}
                <Link to={{
                    pathname: "/",
                    state: {playAgain: true}
                }} disabled>
                   <Button variant="light" className="px-5 py-2" disabled={setEnable(machineSelection)}>
                        PLAY AGAIN
                    </Button>
                </Link>
            </div>
        </div>
    );
};


export default WinOrLose;