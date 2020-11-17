import React from 'react';
import { Route } from 'react-router-dom';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<main>
				<Route path='/' component={Feed} />
			</main>
		</div>
	);
}

export default App;
