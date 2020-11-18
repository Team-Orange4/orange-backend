import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='nav'>
			<Link>Home</Link> <br />
			<button>Create a Post</button> <br />
			<Link>Login</Link>
		</div>
	);
};

export default Navbar;

