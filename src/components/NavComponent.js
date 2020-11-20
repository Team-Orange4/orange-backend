import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';

const NavComponent = () => {
	return (
		<div className='nav'>
			<Navbar bg='primary' variant='dark' fixed='top' expand='md'>
				<Navbar.Brand href='#home'>Orange</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#login'>Login</Nav.Link>
					<Nav.Link href='#profile'>Profile</Nav.Link>
					<button className="btn btn-light">Create a Post</button>
				</Nav>
			</Navbar>
			{/* <Link>Home</Link> <br />
			<button>Create a Post</button> <br />
			<Link>Login</Link> */}
		</div>
	);
};

export default NavComponent;
