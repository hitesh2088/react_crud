/**
 * @file Wrapper component that renders components from src/components.
 */

import React from 'react';
import StatusForm from './components/status-form';
import StatusView from './components/status-view';
import './app.scss';
import { BrowserRouter, Route,Link } from 'react-router-dom';

if (!window.Intl)
    window.Intl = require('intl');


/**
 * Renders App component.
 * @return {ReactElement} HelloWorld component
 */

const App = () =>{
	return (
		<BrowserRouter>
			<div>
    			<Route exact path="/" component={StatusForm} />
    			<Route exact path="/:date" component={StatusView}/>
    		</div>	
    	</BrowserRouter>)};

export default App;
