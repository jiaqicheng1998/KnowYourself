import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import articleReducer from './article';
import commentReducer from './comment';
import resultReducer from './result';

const rootReducer = combineReducers({
    session: sessionReducer,
    article: articleReducer,
    comment: commentReducer,
    result: resultReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk)
} else {
    const logger = require('redux-logger').default;
    const composeEnhancer = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancer(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;