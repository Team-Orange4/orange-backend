import React, { useState } from 'react';
import BootstrapModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ModalComponent = ({ show, handleClose }) => {
	const [newPost, setNewPost] = useState({});

	function handleChange(event) {
		event.preventDefault();
		setNewPost({ ...newPost, [event.target.id]: event.target.value });
	}
	function createAPost(event) {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/posts',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: newPost,
		});
		handleClose();
	}

	return (
		<BootstrapModal show={show} onHide={handleClose}>
			<BootstrapModal.Header closeButton>
				<BootstrapModal.Title>Create a Post</BootstrapModal.Title>
			</BootstrapModal.Header>
			<BootstrapModal.Body>
				<form id='create'>
					Title: <input type='text' id='title' onChange={handleChange} />
					<textarea
						id='body'
						form='create'
						cols='50'
						onChange={handleChange}
						placeholder='Enter text here...'></textarea>
					<Button variant='primary' onClick={createAPost} type='submit'>
						Submit
					</Button>
				</form>
			</BootstrapModal.Body>
		</BootstrapModal>
	);
};

export default ModalComponent;
