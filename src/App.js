import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Feed from './components/Feed';
import NavComponent from './components/NavComponent';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

import './App.scss';

function App() {
	const [token, setToken] = useState();
	const [refresh, setRefresh] = useState(true);
	return (
		<div className='App'>
			<NavComponent token={token} setToken={setToken} setRefresh={setRefresh} />
			<main>
				<Route path='/' exact render={() => <Login setToken={setToken} />} />
				<Route path='/create' component={CreateAccount} />
				<Route
					path='/feed'
					render={() => <Feed refresh={refresh} setRefresh={setRefresh} />}
				/>
			</main>
		</div>
	);
}

export default App;
