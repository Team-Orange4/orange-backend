import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import { apiUrl } from '../config';

const Feed = ({ refresh, setRefresh }) => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		if (refresh) {
			axios({
				method: 'GET',
				url: `${apiUrl}/posts`,
			})
				.then((res) => setPost(res.data.reverse()))
				.then(() => setRefresh(false));
		}
	}, [refresh]);

	return (
		<div>
			{post.map((post) => {
				return (
					<Post
						postId={post._id}
						userId={post.owner.ownerId}
						username={post.owner.username}
						title={post.title}
						body={post.body}
						setRefresh={setRefresh}
					/>
				);
			})}
		</div>
	);
};

export default Feed;
