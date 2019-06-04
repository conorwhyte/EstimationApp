import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'
import Estimation from './Pages/Estimation'
import Home from './Pages/Home'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Store/Reducers'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './Store/Epics/index'
import './index.css'

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware))
epicMiddleware.run(rootEpic);

const appElement = document.getElementById('App')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/estimation/" component={Estimation} />
      </div>
    </Router>
  </Provider>,
  appElement
)
