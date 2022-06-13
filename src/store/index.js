import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import newsReducer from "./newsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: newsReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))