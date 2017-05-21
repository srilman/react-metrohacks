require('bootstrap/dist/css/bootstrap.css');
require('./scss/main.scss')

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory} from 'react-router-dom';

import App from './jsx/App.jsx';
import LogisticsI from './jsx/LogisticsI.jsx';
import InterestsI from './jsx/InterestsI.jsx';
import InterestsII from './jsx/InterestsII.jsx';
import InterestsIII from './jsx/InterestsIII.jsx';
import MainPage from './jsx/MainPage.jsx';
import MapPage from './jsx/MapPage.jsx';

var useful = [];
var notUse = ["Amusement Parks","Aquariums and Zoos","Art","Books","Cafes","Camping","Casinos","Food",
				"Landmarks and Monuments","Nature","Nightlife and Drink","Recreation", "Relaxation","Religion","Shopping","Technology"];

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
		document.getElementById('app'));
