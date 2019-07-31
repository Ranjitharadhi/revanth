import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './component/Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />,document.getElementById('root'));


serviceWorker.unregister();


