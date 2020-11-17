import React from 'react';
import { Route } from 'react-router-dom';
import PostButtons from './PostButtons';


const Post = () => {
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
            <Route path="/" component={PostButtons} />

        </div>
    );
};

export default Post;