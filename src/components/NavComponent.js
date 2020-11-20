import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ModalComponent from './ModalComponent';
import Nav from 'react-bootstrap/Nav';
import { Link, useHistory } from 'react-router-dom';

const NavComponent = () => {
	let history = useHistory();
	//Jen helped us with this at codesandbox.io
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function logout() {
		localStorage.clear();
		history.push('/');
	}
	return (
		<div className='nav'>
			<Navbar bg='primary' variant='dark' fixed='top' expand='md'>
				<Navbar.Brand href='feed'>Orange</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='feed'>Home</Nav.Link>
					{localStorage.getItem('token') ? (
						<button className='btn btn-light' onClick={logout}>
							Logout
						</button>
					) : (
						<Link className='btn btn-light'> Login</Link>
					)}
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
