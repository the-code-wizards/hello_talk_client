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
        return <div className="w-[300px] h-[300px] mx-auto">
            <Lottie animationData={loader} loop={true} />
        </div>
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

                    <div>
                        <div class="text-center">
                            <div role="status">
                                <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
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
            <div className='flex justify-center mt-10'>
                <Pagination postsPerPage={postsPerPage} SetCurrentPage={SetCurrentPage} filtered={filtered} currentPage={currentPage}></Pagination>
            </div>
        </div >
    );
};

export default Posts;