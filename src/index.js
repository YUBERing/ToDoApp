import React from 'react';
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import App from './App';

import store, {history} from './store/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HistoryRouter history={history}>
        <Provider store = {store}>
            <App />
        </Provider>
    </HistoryRouter>
);