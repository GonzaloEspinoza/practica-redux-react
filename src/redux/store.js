import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import rooReducers from './reducer/rootReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(


const store = createStore(
    rooReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    ));

export default store;
