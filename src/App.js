import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Feed from './components/Feed';
import NavComponent from './components/NavComponent';


import './App.scss';

function App() {

	return (
		<div className='App'>
			<NavComponent  />
			<main>
				<Route path='/' component={Feed} />
			</main>
		</div>
	);
}

export default App;
