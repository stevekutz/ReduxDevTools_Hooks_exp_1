import React from 'react';
import ReactDOM from 'react-dom';
import {StateInspector} from 'reinspect';

import './index.css';
import App from './App';
import CounterUseState from './CounterUseState';
import InputHooks from './InputHooks';
import * as serviceWorker from './serviceWorker';

function WrappedState () {
   return(
       <StateInspector>
           <App/>
           <CounterUseState/>
       </StateInspector>
    )
}

ReactDOM.render(<WrappedState />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
