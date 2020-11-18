import React from 'react';
import { Form } from 'react-bootstrap';

const Login = () => {
	return (
		<div>
			<form>
				Email:
				<input type='text' />
				Password:
				<input type='password' />
			</form>
		</div>
	);
};

export default Login;
