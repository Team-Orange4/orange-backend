import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ LoginForm, error}) => {
	const [details, setDetails] = useState({name: "", email: "", password: ""});

	const submitHandler = (event) => {
		event.preventDefault();
		LoginForm(details);
	}

	return (
		<div>
			<h1>Welcome to Orange</h1>
		<form onSubmit={submitHandler}>
			<div className='form-inner'>
				<h2>Login</h2>
				{(error != "") ? (<div className="error">{error}</div>) : ""}
				<div className='form-group'>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						id='name'
						onChange={(event) =>
							setDetails({ ...details, name: event.target.value })
						}
						value={details.name}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email: </label>
					<input
						type='email'
						name='email'
						id='email'
						onChange={(event) =>
							setDetails({ ...details, email: event.target.value })
						}
						value={details.email}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						name='password'
						id='password'
						onChange={(event) =>
							setDetails({ ...details, password: event.target.value })
						}
						value={details.password}
					/>
				</div>
				<input type='submit' value='LOGIN' />
			</div>
		</form>
		<h2>Don't have an account yet?</h2>
		<Link to="/create">Sign Up</Link>
		</div>
	);
};

export default Login;
