require('bootstrap/dist/css/bootstrap.css');
require('./scss/main.scss')

import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
