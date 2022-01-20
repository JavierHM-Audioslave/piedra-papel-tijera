import { handleActions } from "redux-actions";


const initialState = {
    value: 0
};

const sum1 = (state) => ({ ...state, value: state.value + 1 });

const minus1 = (state) => ({...state, value: state.value - 1});

const newScore = (_, {newScore}) => newScore;

const clean = () => initialState;


export default handleActions(
    {
        "SUM1": sum1,
        "MINUS1": minus1,
        "NEW_SCORE": newScore,
        "CLEAN": clean
    },
    initialState
);