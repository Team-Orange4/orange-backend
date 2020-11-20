import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { apiUrl } from '../config';

const Login = ({ setToken, setRefresh }) => {
	const [loginInfo, setLoginInfo] = useState({});
	let history = useHistory();

	function handleChange(event) {
		event.preventDefault();
		setLoginInfo({ ...loginInfo, [event.target.id]: event.target.value });
	}

	function handleCancel(event) {
		setLoginInfo('');
	}
	function handleSubmit(event) {
		event.preventDefault();
		axios({
			method: 'POST',
			url: `${apiUrl}/users/login`,
			data: { email: loginInfo.email, password: loginInfo.password },
		}).then((res) => {
			console.log(res);
			if (res.data.accessToken) {
				localStorage.setItem('token', res.data.accessToken);
				localStorage.setItem('id', res.data.id);
				setToken(res.data.accessToken);
				history.push('/feed');
				setRefresh(true);
			}
		});
	}

	return (
		<div className='form'>
			<h1>Welcome to Orange</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					placeholder='Email'
					id='email'
					onChange={handleChange}
					value={loginInfo.username}
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='password'
					placeholder='Password'
					id='password'
					onChange={handleChange}
					value={loginInfo.password}
				/>
				<label htmlFor='password'>Password</label>

				<button type='submit'>Login</button>
				<button type='button' onClick={handleCancel} className='cancel'>
					Cancel
				</button>
				<p
					style={
						loginInfo.attempted ? { display: 'block' } : { display: 'none' }
					}
					className={loginInfo.valid ? 'valid' : 'invalid'}>
					Passwords must match.
				</p>
			</form>
			<h4>Don't Have An Account?</h4>
			<Link to='/create'>Create Account</Link>
		</div>
	);
};

export default Login;
