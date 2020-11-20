import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ModalComponent from './ModalComponent';
import Nav from 'react-bootstrap/Nav';
import { Link, useHistory } from 'react-router-dom';

const NavComponent = ({ token, setToken, setRefresh }) => {
	let history = useHistory();
	//Jen helped us with this at codesandbox.io
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function logout() {
		localStorage.clear();
		setToken('');
		history.push('/');
	}
	return (
		<div className='nav'>
			<Navbar bg='primary' variant='dark' fixed='top' expand='md'>
				<Navbar.Brand to='/feed' as={Link}>
					Orange
				</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link to='/feed' as={Link}>
						Home
					</Nav.Link>
					{token ? (
						<button className='btn btn-light' onClick={logout}>
							Logout
						</button>
					) : (
						<Link className='btn btn-light' to='/'>
							Login
						</Link>
					)}
					<button className='btn btn-light' onClick={handleShow}>
						Create a Post
					</button>
				</Nav>
			</Navbar>
			<ModalComponent
				show={show}
				handleClose={handleClose}
				setRefresh={setRefresh}
			/>
		</div>
	);
};

export default NavComponent;
