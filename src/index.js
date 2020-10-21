import React from 'react';
import {createStore , compose , combineReducers} from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const reducerFunc  = combineReducers({
    login : reducer,
    detail : reducer_detail
})

const componentEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reactRedux = createStore(reducerFunc , componentEnhance())

ReactDOM.render( <Provider store={reactRedux}><App /></Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
