import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Pagination from './Pagination';
import Single from './Single';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const Posts = () => {
    const [user, error] = useAuthState(auth);
    const [currentPage, SetCurrentPage] = useState(1);
    const [postsPerPage, SetPostPerPage] = useState(4);
    const [totalPosts, setTotalPost] = useState(0)


    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/community/communityposts`);
            const data = await res.json();
            // console.log(data)
            setTotalPost(data.length)
            return data;
        }
    })


    // Get Current Posts 

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
            {
                currentPosts.map(post =>
                    <Single
                        user={user}
                        singlePost={post}
                        key={post._id}
                    ></Single>
                )
            }
            <div className='flex justify-center mt-10'>
                <Pagination postsPerPage={postsPerPage} SetCurrentPage={SetCurrentPage} totalPosts={totalPosts} currentPage={currentPage}></Pagination>
            </div>
        </div >
    );
};

export default Posts;