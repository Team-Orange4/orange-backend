import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalComponent = ({ show, handleClose }) => {
	return (
		<Modal show={show}>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>Create a Post</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Modal body text goes here.</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
					<Button variant='primary'>Create</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</Modal>
	);
};

export default ModalComponent;
