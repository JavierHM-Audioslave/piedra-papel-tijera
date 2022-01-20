import React from "react";
import Score from "./Score";
import SPSSelector from "./SPSSelector";
import Footer from "./Footer";
import { useLocation } from "react-router";
import OneOnOne from "./OneOnOne";
import Container from "react-bootstrap/Container";


const SelectionDashboard = () => {


    const location = useLocation();
    return (
        <Container>
            <Score/>
            { (!location.state || location.state.playAgain === true) && <SPSSelector/>}
            { location.state && (location.state === "papel" || location.state === "tijera" || location.state === "piedra") && <OneOnOne picked={location.state}/> }
            <Footer/>
        </Container>
    );
};

export default SelectionDashboard;