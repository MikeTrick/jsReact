import React from 'react';
import './index.css';
import store from './redux/redux-store'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App
            store={store}
            appState={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />
    </Provider>
);

