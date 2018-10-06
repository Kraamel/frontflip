import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.web';
import registerServiceWorker from './registerServiceWorker';

// Web version entry point
ReactDOM.render(
    <App />
    , document.getElementById('root'));
registerServiceWorker();
