import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Single from './Single';


const SinglePost = () => {

    const [user, error] = useAuthState(auth);
    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch("https://hello-talk-webserver.vercel.app/communityposts")
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])
    console.log(posts)


    return (
        <div>
            {
                posts.map(post => <>
                    <Single
                        user={user}
                        singlePost={post}
                    ></Single>
                </>)
            }
        </div >
    );
};

export default SinglePost;