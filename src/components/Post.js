import React from 'react';
import { Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import PostButtons from './PostButtons';

const Post = () => {
	return (
		<div>
			<Card border='warning'>
				<Card.Header>post title option 1</Card.Header>
				<Card.Body>
					<Card.Title>post title option 2</Card.Title>
					<Card.Text>OMG my first post on Orange</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Route path='/' component={PostButtons} />
				</Card.Footer>
			</Card>
		</div>
	);
};

export default Post;
