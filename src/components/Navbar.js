import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='nav'>
			<Link>Home</Link> <br />
			<button>Create a Post</button>
		</div>
	);
};

export default Navbar;

