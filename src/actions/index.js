import * as types from './action-types';

export const fetchBegin = (word) => {
    return {
        word: word,
        type: types.FETCH_DATA_BEGIN,
    };
}

export const fetchSuccess = (payload) => {
    console.log("fetch success");
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload: payload,
    };
}

export function fetchPeople(word){
    console.log("fetch", word);
    return dispatch => {
        dispatch(fetchBegin(word));
        return fetch("https://swapi.co/api/people/?search=" + word)
            .then(r => r.json())
            .then(r => {
                dispatch(fetchSuccess(r));
                // return r;
            })
    }
}