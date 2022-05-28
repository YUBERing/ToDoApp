import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'

import createRootReducer from './reducers/rootReducer'

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            )
        )
    );
    
    return store;
}