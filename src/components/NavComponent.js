import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ModalComponent from './ModalComponent';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';


const NavComponent = () => {
	//Jen helped us with this at codesandbox.io
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className='nav'>
			<Navbar bg='primary' variant='dark' fixed='top' expand='md'>
				<Navbar.Brand href='#home'>Orange</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#login'>Login</Nav.Link>
					<Nav.Link href='#profile'>Profile</Nav.Link>
					<button className='btn btn-light' onClick={handleShow}>
						Create a Post
					</button>
				</Nav>
			</Navbar>
			<ModalComponent show={show} handleClose={handleClose} />
		</div>
	);
};

export default NavComponent;
