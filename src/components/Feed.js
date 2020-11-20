import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';

const Feed = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'http://localhost:8000/posts',
		}).then((res) => setPost(res.data));
	}, []);

	return (
		<div>
			{post.reverse().map((post) => {
				return (
					<Post
						postId={post._id}
						userId={post.owner.ownerId}
						username={post.owner.username}
						title={post.title}
						body={post.body}
					/>
				);
			})}
		</div>
	);
};

export default Feed;
