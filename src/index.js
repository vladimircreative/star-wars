import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider} from "react-redux";
import rootReducer from './reducers/rootReducer';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let initialStore = {
    word: "Luke",
    loading: true,
}

const store = createStore(
    rootReducer, 
    initialStore,
    applyMiddleware(thunk),);

ReactDOM.render(
    <Provider store = {store}>    
        <App />      
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
