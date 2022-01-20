import history from "./history";

const changeRouteWithProp = e => {

    let currentElement = e.target;
    let currentId = currentElement.id;
    while(currentId !== "papel" && currentId !== "tijera" && currentId !== "piedra") {
        currentElement = currentElement.parentElement;
        currentId = currentElement.id;
    };

    history.push({
        pathname: "/",
        state: currentId
    });
};


const setEnable = machineSelection => {

    return machineSelection ? false : true;
};


export {changeRouteWithProp, setEnable};