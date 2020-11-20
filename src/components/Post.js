import React from 'react';
import { Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import PostButtons from './PostButtons';

const Post = ({title, body}) => {
	return (
		<div>
			<Card border='warning'>
				<Card.Header>username</Card.Header>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{body}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Route path='/' component={PostButtons} />
				</Card.Footer>
			</Card>
		</div>
	);
};

export default Post;
