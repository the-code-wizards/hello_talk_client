import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Pagination from './Pagination';
import Single from './Single';
import loader from "../../resources/lottieJson/loader.json";
import Lottie from "lottie-react";
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const Posts = ({ searchIndex, searchLoading, setSearchIndex, setSearchLoading, spninerLoading }) => {
    const [user, error] = useAuthState(auth);
    const [currentPage, SetCurrentPage] = useState(1);
    const [postsPerPage, SetPostPerPage] = useState(4);
    const [allPosts, setAllPosts] = useState([])


    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/community/communityposts`);
            const data = await res.json();
            setAllPosts(data)
            return data;
        }
    })

    const searchsCancel = () => {
        setSearchIndex("")
        refetch()
        setSearchLoading(false)
    }


    // Get Current Posts 

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const filtered = allPosts.filter((data) =>
        data.title.toLowerCase().includes(searchIndex)
    );
    const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);




    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
            {
                searchLoading && !spninerLoading ?
                    <div className='flex items-center justify-center px-2 pt-5'>
                        <p className=''>{filtered.length} results found</p>
                        <button className='mx-4 btn btn-outline btn-xs' onClick={searchsCancel}>X</button>
                    </div>
                    :
                    <>
                    </>
            }
            {
                spninerLoading ?
<Loader/>
                    :
                    <>
                    </>
            }

            {
                !spninerLoading ?
                    currentPosts.map(post =>
                        <Single
                            user={user}
                            singlePost={post}
                            key={post._id}
                        ></Single>
                    )
                    :
                    <>
                    </>
            }
            <div className='flex justify-center my-10'>
                <Pagination postsPerPage={postsPerPage} SetCurrentPage={SetCurrentPage} filtered={filtered} currentPage={currentPage}></Pagination>
            </div>
        </div >
    );
};

export default Posts;