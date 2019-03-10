import * as types from "../actions/action-types";

// import React from "react";

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BEGIN:
            return {...state, word: action.word, loading: true}
        case types.FETCH_DATA_SUCCESS:
            return {...state, loading: false, cards: action.payload.results}
        default:
            return state;
    }
}

export default rootReducer;