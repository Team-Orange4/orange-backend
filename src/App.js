import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Feed from './components/Feed';
import NavComponent from './components/NavComponent';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';


import './App.scss';


function App() {
  const [token, setToken] = useState();

	return (
		<div className='App'>
      <NavComponent />
      <main>
        <Route path="/" exact component={Login} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/feed" component={Feed} />
      </main>
		</div>
	);

}

export default App;
