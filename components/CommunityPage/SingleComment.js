import React, { useState } from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { useQuery } from 'react-query';

const SingleComment = ({ postComment, user, comments, setComments }) => {
    const { name, comment, email, postTime, photoUrl, pid, _id } = postComment

    const [commentSOnLike, setComemntSOnLIke] = useState(false)


    const { data: cLikeStatus = [], refetch, isLoading } = useQuery({
        queryKey: ["cLikeStatus"],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/community/clike?email=${user?.email}&id=${_id}`);
            const data = await res.json();
            if (data.length >= 1) {
                setComemntSOnLIke(true)
            }
            return data;
        }
    })




    const commentOnLike = () => {
        const commentOnLike = {
            email: user.email,
            postTime: Date(),
            cid: _id
        }
        console.log(commentOnLike)
        fetch("https://hello-talk-webserver.vercel.app/community/likeOnComment", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(commentOnLike)
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setComemntSOnLIke(true)
            })

    }

    const handleUnlikecommentOnLike = () => {
        fetch(`https://hello-talk-webserver.vercel.app/community/clike/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                if (res.deletedCount >= 1) {
                    setComemntSOnLIke(false)
                }
            })

    }

    const handleDeleteComment = () => {
        if (window.confirm("Do you want to delete")) {
            fetch(`https://hello-talk-webserver.vercel.app/community/deleteComment/${_id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(res => {
                    // console.log(res)
                    if (res.deletedCount >= 1) {
                        // console.log(res)
                        const removedArray = removeObjectWithId(comments, _id);
                        setComments(removedArray)

                    }
                })
        }
    }

    function removeObjectWithId(arr, id) {
        const objWithIdIndex = arr.findIndex((obj) => obj._id === id);

        if (objWithIdIndex > -1) {
            arr.splice(objWithIdIndex, 1);
        }

        return arr;
    }

    // const imgbbsecret = 'd8cf4210ca9e59597c20c2db0651d6a7'
    // console.log(imgbbsecret)
    //         const formData = new FormData();
    //         formData.append('image', userImg);
    //         const url = `https://api.imgbb.com/1/upload?key=${imgbbsecret}`;
    //         fetch( url, {
    //             method: 'POST',
    //             body: formData
    //       })
    //       .then(res => res.json())
    //       .then(data => {
    //         location.reload()
    //       })


    return (
        <div className='bg-[#F0F2F5]  rounded-lg mt-2 p-1'>
            <div className='mt-1 flex  items-center '>
                <div className="avatar mr-3">
                    <div className="w-6 h-6 rounded-full">
                        {
                            postComment?.photoURL ?
                                <img src={photoURL} alt="Profile Picture" />
                                :
                                <img src="https://i.ibb.co/WnxWNTP/User-Profile-PNG.png" alt="Profile Picture" />
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-[13px] font-bold'>{name}</h1>
                    <h2 className='text-[11px] mt-[-2px]'>{postTime.slice(0, 11)}</h2>
                </div>
            </div>
            <div className='ml-9 ' >
                <p className='text-[15px] my-[2px]'>{comment}</p>
                <div className='flex'>
                    {
                        !commentSOnLike ?
                            <button className='flex hover:bg-[#898a8b] items-center p-1 ml-[-4px] rounded-lg' onClick={commentOnLike}><span className=' text-[13px] '>Like</span></button>
                            :
                            <button className='flex p-1 ml-[-4px] hover:bg-[#898a8b] items-center rounded-lg' ><span className=' text-[13px] ' onClick={handleUnlikecommentOnLike}>Liked</span></button>
                    }
                    <button className='flex p-1 ml-[-4px] hover:bg-[#898a8b] items-center rounded-lg' ><span className=' text-[13px] ml-1' onClick={handleDeleteComment} >Delete</span></button>
                </div>
            </div>

        </div>
    );
};

export default SingleComment;