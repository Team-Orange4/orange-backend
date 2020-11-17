import React from 'react';
import { Route } from 'react-router-dom';
import PostInteraction from './PostInteraction';

const Posts = () => {
    // const [post, setPost] = useState();
    // const url = `posts`

    // useEffect(() => {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((resJson) => setPost(resJson))
    //         .catch(console.error)
    // }, []);

    return (
        <div>
            <p>OMG my first post on Orange</p>
            <Route path="/" component={PostInteraction} />

        </div>
    );
};

export default Posts;