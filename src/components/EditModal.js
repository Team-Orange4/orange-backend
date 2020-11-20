import React, { useState } from 'react';
import BootstrapModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const EditModal = ({ show, handleClose, postId, title, body }) => {
	const [editPost, setEditPost] = useState({});

	function handleChange(event) {
		event.preventDefault();
		setEditPost({ ...editPost, [event.target.id]: event.target.value });
	}
	function editYourPost(event) {
		axios({
			method: 'PATCH',
			url: `http://localhost:8000/posts/${postId}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: editPost,
		});
		handleClose();
	}

	return (
		<BootstrapModal show={show} onHide={handleClose}>
			<BootstrapModal.Header closeButton>
				<BootstrapModal.Title>Edit Post</BootstrapModal.Title>
			</BootstrapModal.Header>
			<BootstrapModal.Body>
				<form id='edit'>
					Title:{' '}
					<textarea form='edit' rows='1' id='title' onChange={handleChange}>
						{title}
					</textarea>
					<textarea id='body' form='edit' cols='50' onChange={handleChange}>
						{body}
					</textarea>
					<Button variant='primary' onClick={editYourPost} type='submit'>
						Submit
					</Button>
				</form>
			</BootstrapModal.Body>
		</BootstrapModal>
	);
};

export default EditModal;
