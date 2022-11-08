import React from 'react';
import './index.css';
import store from './redux/redux-store'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                store={store}
                appState={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

