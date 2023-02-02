import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TopAuthor = () => {
    const [loading, setLoading] = useState()
    const [users, setUsers] = useState([])
    const [fetchLoading, setfetchLoading] = useState(false)
    const usersCommentCount = []
    const [sortedUser, setSortedUser] = useState([])
    const [topAuthors, setTopAuthors] = useState([])
    const [slicedData, setslicedData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/topAuthors")
            .then(res => res.json())
            .then(data => {
                if (data.length >= 1) {
                    setTopAuthors(data)
                    const sliced = topAuthors.slice(3, topAuthors.length)
                    setslicedData(sliced)
                    console.log(slicedData)
                }
            })
    }, [])



    const reloadFetch = () => {
        const fetchPosts = async () => {
            setLoading(true)
            fetch(`https://hello-talk-webserver.vercel.app/allusers`)
                .then(res => res.json())
                .then(data => {
                    setUsers(data)
                    if (users.length >= 1) {
                        setUsers(data)
                        // console.log(users)
                        setfetchLoading(true)
                        userCommentfetch(users)

                    }
                })

        }
        fetchPosts()
    }

    const userCommentfetch = (users) => {
        users.forEach(function (item, index) {
            // console.log(item)
            const { email, name } = item
            // console.log(email)
            fetch(`https://hello-talk-webserver.vercel.app/commentcount?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    const userData = {
                        email,
                        name,
                        totalCommented: data.length
                    }
                    usersCommentCount.push(userData)
                    console.log(index)
                    if (users.length === usersCommentCount.length) {
                        const sortedUser = usersCommentCount.sort(topN)
                        // console.log(sortedUser)
                        setSortedUser(sortedUser)
                        console.log(sortedUser)
                        topAuthorList(sortedUser)
                        setfetchLoading(false)
                        setLoading(false)
                    }

                })
        })

        // console.log(usersCommentCount)
    }

    const topN = (a, b) => {
        return b.totalCommented - a.totalCommented;
    };

    const topAuthorList = (sortedUser) => {
        fetch('http://localhost:5000/topAuthors', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(sortedUser),
        })
            .then((res) => res.json())
            .then((data) => {
                alert('Top Author Upadated');
                console.log(data);
            });
    }


    return (
        <div>
            <div className="card w-80 bg-[#fff] shadow-xl">
                <div className='card shadow-xl p-2 m-4 border-[2px] border-green-400'>
                    <h1 className='text-[24px] mt-2 text-center bg-white rounded-lg'>Top Helpful Author</h1>
                    <div className='grid grid-cols-10 '>
                        <div className='col-span-3 place-self-center mt-4'>
                            <div className="avatar ">
                                <div className="w-16 rounded-full ring ring-[#189bd3] ring-offset-[#fff] ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className=' bg-white mt-2 rounded-lg'>
                                <h1 className='text-[14px] text-center font-bold '>{topAuthors[1]?.name}</h1>
                                <p className=' text-[14px] text-center font-bold'>#2</p>
                            </div>

                        </div>
                        <div className=' col-span-4 mt-5'>
                            <div className="avatar  place-self-center">
                                <div className="w-24 rounded-full ring ring-[#189bd3] ring-offset-base-100 ring-offset-2 mt-4">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className=' bg-white mt-2 rounded-lg'>
                                <h1 className='text-[14px] text-center font-bold'>{topAuthors[0]?.name}</h1>
                                <p className=' text-[14px] text-center font-bold'>#1</p>
                            </div>
                        </div>
                        <div className='col-span-3 place-self-center mt-5'>
                            <div className="avatar ">
                                <div className="w-16 rounded-full ring ring-[#189bd3] ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className=' bg-white mt-2 rounded-lg'>
                                <h1 className='text-[14px] text-center font-bold'>{topAuthors[2]?.name}</h1>
                                <p className=' text-[14px] text-center font-bold'>#3</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className='btn btn-sm' onClick={reloadFetch}>Reload</button> */}

                <div className="px-8 pb-4">
                    <div>
                        {
                            slicedData.map((slice, i) => <>
                                <div className='grid grid-cols-12 bg-[#F8EDE3] p-2 rounded-lg mt-2'>
                                    <h1 className='col-span-2 place-self-center'>#{i + 1}</h1>
                                    <div className='flex col-span-10 items-center'>
                                        <div className="avatar">
                                            <div className="w-8 rounded-full">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                        <h1 className='ml-2'>
                                            {slice.name}
                                        </h1>
                                    </div>
                                </div>
                            </>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopAuthor;