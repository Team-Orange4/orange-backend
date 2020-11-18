import React, { useState } from 'react';
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
			<NavComponent  />
			<main>
				<Route path='/' component={Feed} />
			</main>
  const admin = {
    email: "test@test.com",
    password: "password"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const LoginForm = details => {
    console.log(details);
    if(details.email == admin.email && details.password == admin.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {setError("Details do not match");}
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }

	return (
		<div className='App'>
      {(user.email != "") ? (
        <Feed />
      ) : (
        <Login LoginForm={LoginForm} error={error}/>
      )}
      <main>
        <Route path="/create" component={CreateAccount} />
      </main>
		</div>
	);

}

export default App;
