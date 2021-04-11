import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import AppContainer from './jsx/AppContainer.jsx'
import reducer from './reducers';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

ReactDOM.hydrate(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.querySelector('main')
)
