import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
	const initialState = {
		username: '',
		password: '',
		passwordConfirm: '',
		valid: false,
		attempted: false,
	};
	const [formState, setFormState] = useState(initialState);
	function handleChange(event) {
		event.preventDefault();
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}
	function handleConfirmChange(event) {
		event.preventDefault();
		setFormState({ ...formState, [event.target.id]: event.target.value });
		if (event.target.value === formState.password) {
			setFormState({
				...formState,
				[event.target.id]: event.target.value,
				valid: true,
			});
		} else {
			setFormState({
				...formState,
				[event.target.id]: event.target.value,
				valid: false,
				attempted: true,
			});
		}
	}
	function handleCancel(event) {
		setFormState(initialState);
	}
	function handleSubmit(event) {
		event.preventDefault();
		if (formState.password === formState.passwordConfirm) {
			alert(`Welcome ${formState.username}!`);
			handleCancel(event);
		} else {
			setFormState({ ...formState, valid: false });
		}
	}
	return (
		<div className='form'>
			<h1>Welcome to Orange</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Username'
					id='username'
					onChange={handleChange}
					value={formState.username}
				/>
				<label htmlFor='username'>Username</label>
				<input
					type='password'
					placeholder='Password'
					id='password'
					onChange={handleChange}
					value={formState.password}
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					placeholder='Confirm password'
					id='passwordConfirm'
					onChange={handleConfirmChange}
					value={formState.passwordConfirm}
				/>
				<label htmlFor='passwordConfirm'>Confirm password</label>
				<button type='submit'>Login</button>
				<button type='button' onClick={handleCancel} className='cancel'>
					Cancel
				</button>
				<p
					style={
						formState.attempted ? { display: 'block' } : { display: 'none' }
					}
					className={formState.valid ? 'valid' : 'invalid'}>
					Passwords must match.
				</p>
			</form>
			<h4>Don't Have An Account?</h4>
			<Link to="/create">Create Account</Link>
		</div>
	);
};

export default Login;
