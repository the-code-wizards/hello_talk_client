import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiTwotoneLike } from 'react-icons/ai';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
const LikeButton = ({ id }) => {
    const [user, error] = useAuthState(auth);
    const [likeButton, SetLikeButton] = useState(false)
    const [likeCount, setLikeCount] = useState(0)


    const { data: getlikes = [], refetch } = useQuery({
        queryKey: ["getlikes", id],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/community/totallikes?id=${id}`)
            const data = await res.json();
            setLikeCount(data.length)
            return data
        }
    })

    useEffect(() => {
        fetch(`https://hello-talk-webserver.vercel.app/community/like?email=${user?.email}&id=${id}`)
            .then(res => res.json())
            .then(res => {
                if (res.length >= 1) {
                    SetLikeButton(true)
                }
                // console.log(res)
            })


    }, [user?.email, id])

    const handleLike = () => {
        SetLikeButton(true)
        const postLike = {
            email: user?.email,
            postTime: Date(),
            pid: id
        }
        fetch("https://hello-talk-webserver.vercel.app/community/postlike", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postLike)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.insertedId) {
                    SetLikeButton(true)
                    refetch()
                }
                else {
                    SetLikeButton(false)
                }
            })

    }

    const handleUnlike = () => {
        fetch(`https://hello-talk-webserver.vercel.app/community/unlike?email=${user?.email}&id=${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.deletedCount >= 1) {
                    SetLikeButton(false)
                    refetch()
                }
            })

    }


    return (
        <div>
            {
                user ?
                    <div>
                        {
                            likeButton ?
                                <button className='flex bg-[#F0F2F5] px-2 items-center ' onClick={handleUnlike}><AiTwotoneLike /><span className='ml-1'>Liked</span>
                                    <span className='pl-2'>{getlikes?.length}</span>
                                </button>
                                :
                                <button onClick={handleLike} className='flex  hover:bg-[#F0F2F5] px-2 items-center '><AiTwotoneLike /><span className='ml-1'>Like</span>
                                    <span className='pl-2'>{getlikes?.length}</span>
                                </button>
                        }
                    </div>
                    :
                    <Link href="/signin">
                        <button className='flex px-2 items-center '><AiTwotoneLike /><span className='ml-1'>Like</span>
                            <span className='pl-2'>{getlikes?.length}</span>
                        </button>
                    </Link>
            }
        </div>
    );
};

export default LikeButton;