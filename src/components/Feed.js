import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';

const Feed = () => {
	const [post, setPost] = useState([]);

	// const url = `posts`

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'http://localhost:8000/posts'
		}).then((res) => setPost(res.data))
	}, []);

	return (
		<div >
			{post.map((post) => {
				return <Post title={post.title} body={post.body} />;
			})}
		</div>
	);
};

export default Feed;
