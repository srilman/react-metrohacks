require('bootstrap/dist/css/bootstrap.css');
require('./scss/main.scss')

import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App.jsx';
import MapComponent from './jsx/MapComponent.jsx';
import LogisticsI from './jsx/LogisticsI.jsx';
import InterestsI from './jsx/InterestsI.jsx';
import InterestsII from './jsx/InterestsII.jsx';
import InterestsIII from './jsx/InterestsIII.jsx';

var useful = [];
var notUse = ["Amusement Parks","Aquariums and Zoos","Art","Books","Cafes","Camping","Casinos","Food",
				"Landmarks and Monuments","Nature","Nightlife and Drink","Recreation", "Relaxation","Religion","Shopping","Technology"];

ReactDOM.render(<InterestsII initialAlready={useful} initialNot={notUse}/>, document.getElementById('app'));
//ReactDOM.render(<InterestsII />, document.getElementById('app'));
