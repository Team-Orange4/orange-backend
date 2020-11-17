import React, { useState, useEffect } from 'react';
import Post from './Post';
const Feed = () => {
	const [post, setPost] = useState([{}]);
	// const url = `posts`

	// useEffect(() => {
	//     fetch(url)
	//         .then((res) => res.json())
	//         .then((resJson) => setPost(resJson))
	//         .catch(console.error)
	// }, []);
	return (
		<div className='feed'>
			{post.map((post) => {
				return <Post />;
			})}
		</div>
	);
};

export default Feed;
