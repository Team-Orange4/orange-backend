import React from 'react';
import { Route } from 'react-router-dom';
import Feed from './components/Feed';
import NavComponent from './components/NavComponent';
import Navbar from './components/Navbar';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';


import './App.scss';


function App() {
	return (
		<div className='App'>
      <main>
        <Route path="/" exact component={Login} />
        <Route path="/create" component={CreateAccount} />
      </main>
		</div>
	);

}

export default App;
