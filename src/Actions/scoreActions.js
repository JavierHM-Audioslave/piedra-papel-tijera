

export const setScoreSum1 = () => {
    return {
        type: "SUM1"
    };
};

export const setScoreMinus1 = () => {
    return {
        type: "MINUS1"
    };
};

export const setNewScore = newScore => {
    return {
        type: "NEW_SCORE",
        newScore: newScore
    }
};

export const cleanStore = () => {
    return {
        type: "CLEAN"
    };
};