import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CreateAccount = () => {
    const [regInfo, setRegInfo] = useState({});
    
    function handleChange(event) {
        event.preventDefault();
        setRegInfo({...regInfo, [event.target.id]: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8000/users/register',
            data: regInfo
        });
    }
    return (
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						require
						id='firstName'
						placeholder='First Name'
						onChange={handleChange}
					/>
					<input
						type='text'
						require
						id='lastName'
						placeholder='Last Name'
						onChange={handleChange}
					/>
					<input
						type='text'
						require
						id='username'
						placeholder='Username'
						onChange={handleChange}
					/>
					<input
						type='email'
						require
						id='email'
						placeholder='Email'
						onChange={handleChange}
					/>
					<input
						type='password'
						require
						id='password'
						placeholder='password'
						onChange={handleChange}
					/>
					<button type='submit'>Create Account</button>
				</form>
			</div>
		);
};

export default CreateAccount;