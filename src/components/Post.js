import React from 'react';
import { Route } from 'react-router-dom';
import PostButtons from './PostButtons';


const Post = () => {
	return (
		<div>
			<p>OMG my first post on Orange</p>
			<Route path='/' component={PostButtons} />
		</div>
	);
};

export default Post;

