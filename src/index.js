import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import Estimation from './Pages/Estimation';
import Home from './Pages/Home';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Store/Reducers';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './Store/Epics/index';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import './index.css';
import 'babel-polyfill';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

const appElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/estimation/" component={Estimation} />
            </div>
        </HashRouter>
    </Provider>,
    appElement
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
