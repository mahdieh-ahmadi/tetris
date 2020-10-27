import React from 'react';
import {createStore , compose , combineReducers} from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

// eslint-disable-next-line
import reducer from './components/store/reducer'

const componentEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reactRedux = createStore(reducer,  componentEnhance())

ReactDOM.render( <Provider store={reactRedux}><App /></Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
