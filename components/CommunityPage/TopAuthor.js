import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import useSingleUser from '../hooks/useSingleUser';
import Loader from '../Shared/Loader';

const TopAuthor = () => {
    const [user, error] = useAuthState(auth);
    const [loading, setLoading] = useState()
    const [users, setUsers] = useState([])
    const [fetchLoading, setfetchLoading] = useState(false)
    const [singleUser] = useSingleUser({});
    const usersCommentCount = []
    const [sortedUser, setSortedUser] = useState([])
    const [topAuthors, setTopAuthors] = useState([])


    const { data: topAuthorss = [], refetch, isLoading } = useQuery({
        queryKey: ["topAuthorss"],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/community/topAuthors`);
            const data = await res.json();
            const sortedUser = data.sort((r1, r2) => (r1.totalCommented < r2.totalCommented) ? 1 : (r1.totalCommented > r2.totalCommented) ? -1 : 0);
            setTopAuthors(sortedUser)
            return data;
        }
    })



    const reloadFetch = () => {
        const fetchPosts = async () => {
            setLoading(true)
            setfetchLoading(true)
            fetch(`https://hello-talk-webserver.vercel.app/allusers`)
                .then(res => res.json())
                .then(data => {
                    setUsers(data)
                    if (users.length >= 1) {
                        setUsers(data)
                        console.log(users)
                        setfetchLoading(false)
                        userCommentfetch(users)

                    }
                })

        }
        fetchPosts()
    }

    const userCommentfetch = (users) => {
        users.forEach(function (item, index) {
            // console.log(item)
            const { email, name, photoURL } = item
            // console.log(email)
            if (setfetchLoading) {
                fetch(`https://hello-talk-webserver.vercel.app/community/commentcount?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                        const userData = {
                            email,
                            name,
                            photoURL,
                            totalCommented: data.length
                        }
                        usersCommentCount.push(userData)
                        console.log(index)
                        if (users.length === usersCommentCount.length) {
                            const sortedUser = usersCommentCount.sort((r1, r2) => (r1.totalCommented < r2.totalCommented) ? 1 : (r1.totalCommented > r2.totalCommented) ? -1 : 0);
                            console.log(sortedUser)
                            setSortedUser(sortedUser)
                            console.log(sortedUser)
                            topAuthorList(sortedUser)
                            setLoading(false)
                            refetch()
                        }

                    })
            }
        })

        // console.log(usersCommentCount)
    }

    const topAuthorList = (sortedUser) => {
        setLoading(true)
        fetch('https://hello-talk-webserver.vercel.app/community/topAuthors', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(sortedUser),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                alert('Top Author Upadated');
                console.log(data);
            });
    }


    return (
        <div>
            <div className="card w-80 bg-[#fff] shadow-xl">
                <div className='card shadow-xl p-2 m-4 border-[2px] border-[#005C85]'>
                    <h1 className='text-[24px] mt-2 text-center bg-white rounded-lg'>Top Helpful Authors</h1>
                    <div className='grid grid-cols-10 '>
                        <div className='col-span-3 place-self-center mt-2 pt-5'>
                            <div className="avatar ">
                                <div className="w-16 rounded-full ring ring-[#189bd3] ring-offset-base-100 ring-offset-2">
                                    {
                                        topAuthors[1]?.photoURL ?
                                            <img src={topAuthors[1]?.photoURL} />
                                            :
                                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />

                                    }
                                </div>
                            </div>

                            <div className=' bg-white mt-2 rounded-lg'>
                                <h1 className='text-[14px] text-center font-bold'>{topAuthors[1]?.name}</h1>
                                <p className=' text-[14px] text-center font-bold'>#2</p>
                            </div>
                        </div>

                        <div className=' col-span-4 mt-2 place-self-center '>
                            <div className='relative pt-5'>
                                <div className="avatar ">
                                    <div className="w-24 rounded-full ring ring-[#189bd3] ring-offset-base-100 ring-offset-2 ">
                                        {
                                            topAuthors[0]?.photoURL ?
                                                <img src={topAuthors[0]?.photoURL} />
                                                :
                                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />

                                        }
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/RSKgHp9/crown.png" className='absolute top-[-9px] right-7 w-11' alt="" />
                            </div>
                            <div className=' bg-white mt-2 rounded-lg'>
                                <h1 className='text-[14px] text-center font-bold'>{topAuthors[0]?.name}</h1>
                                <p className=' text-[14px] text-center font-bold'>#1</p>
                            </div>
                        </div>
                        <div className='col-span-3 place-self-center mt-2 pt-5'>
                            <div className="avatar ">
                                <div className="w-16 rounded-full ring ring-[#189bd3] ring-offset-base-100 ring-offset-2">
                                    {
                                        topAuthors[2]?.photoURL ?
                                            <img src={topAuthors[2]?.photoURL} />
                                            :
                                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />

                                    }
                                </div>
                            </div>
                            <div className=' bg-white mt-2 rounded-lg'>
                                <h1 className='text-[14px] text-center font-bold'>{topAuthors[2]?.name.slice(0, 5)}</h1>
                                <p className=' text-[14px] text-center font-bold'>#2</p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    singleUser?.role === "admi" ?
                        <div className='flex justify-center'>
                            <button className='btn btn-sm w-2/4' onClick={reloadFetch}>Reload </button>
                        </div>
                        :
                        <>
                        </>
                }
                <div className="px-8 pb-4">
                    {isLoading ? <Loader /> :
                        topAuthors.slice(3, 10).map((slice, i) =>
                            <div className='grid grid-cols-12 bg-white p-2 rounded-lg mt-2 border border-[#005C85]'
                                key={i}>
                                <h1 className='col-span-2 place-self-center'>#{i + 4}</h1>
                                <div className='flex col-span-10 items-center'>
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            {
                                                slice.photoURL ?
                                                    <img src={slice?.photoURL} alt='' />
                                                    :
                                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='' />

                                            }
                                        </div>
                                    </div>
                                    <h1 className='ml-2'>
                                        {slice.name}
                                    </h1>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default TopAuthor;