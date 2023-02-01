import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Pagination from './Pagination';
import Single from './Single';


const Posts = () => {
    const [user, error] = useAuthState(auth);
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, SetCurrentPage] = useState(1);
    const [postsPerPage, SetPostPerPage] = useState(4);
    const [totalPosts, setTotalPost] = useState(0)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get("https://hello-talk-webserver.vercel.app/communityposts")
            const data = res.data
            setPosts(data)
            setTotalPost(data.length)
            setLoading(false);
        }
        fetchPosts()
    }, []);

    // console.log(posts)

    // Get Current Posts 

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


    if (loading) {
        return <p>Loading</p>
    }

    return (
        <div>
            {
                currentPosts.map(post => <>
                    <Single
                        user={user}
                        singlePost={post}
                    ></Single>
                </>)
            }
            <div className='flex justify-center mt-10'>
                <Pagination postsPerPage={postsPerPage} SetCurrentPage={SetCurrentPage} totalPosts={totalPosts} currentPage={currentPage}></Pagination>
            </div>
        </div >
    );
};

export default Posts;