import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Feed from './components/Feed';
import NavComponent from './components/NavComponent';
import Navbar from './components/Navbar';
import Login from './components/Login';
import CreateAccount from './components/Login';


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
        <div className="welcome">
          <h2> Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Login LoginForm={LoginForm} error={error}/>
      )}
		</div>
	);

}

export default App;
