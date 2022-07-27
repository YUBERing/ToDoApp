import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {createBrowserHistory} from "history";

import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(
  applyMiddleware()
);

const store = createStore(rootReducer, composedEnhancer);

export const history = createBrowserHistory({window});

export default store