require('bootstrap/dist/css/bootstrap.css');
require('./scss/main.scss')

import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App.jsx';
import LogisticsI from './jsx/LogisticsI.jsx';
import InterestsI from './jsx/InterestsI.jsx';

ReactDOM.render(<InterestsI />, document.getElementById('app'));
