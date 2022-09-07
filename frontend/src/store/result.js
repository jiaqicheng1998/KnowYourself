import { csrfFetch } from './csrf';

const LOAD_RESULTS = 'results/loadResults';
const ADD_RESULT = 'results/addResult';

export const loadResults = (results) => {
    return {
        type: LOAD_RESULTS,
        results: results
    };
};

export const addResult = (result) => {
    return {
        type: ADD_RESULT,
        result: result
    };
};

export const loadResultsThunk = () => async (dispatch) => {
    const response = await fetch('/api/results');
    const results = await response.json();
    dispatch(loadResults(results))
}

export const addResultThunk = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/results', {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    const newResult = await response.json();
    dispatch(addResult(newResult));
    return newResult;
};

const initialState = { entries: {}, isLoading: true };

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RESULTS:
            const newState = {...state, entries: {...state.entries}};
            action.results.forEach(result => {
                newState.entries[result.id] = result;
            })
            return newState;
        case ADD_RESULT:
            const newState_add = {...state, entries: {...state.entries}};
            newState_add.entries[action.result.id] = action.result;
            return newState_add;
        default:
            return state;
    }
}

export default resultReducer;