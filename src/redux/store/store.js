import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';

import greetReducer from "../reducers/greeting";

const reducer = combineReducers({
    message: greetReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store;