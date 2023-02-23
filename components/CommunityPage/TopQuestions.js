import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import LikeButton from './Components/LikeButton';
import Modal from './Modal';
import SingleComment from './SingleComment';
import TopostsSingle from './TopostsSingle';

const TopQuestions = () => {


    const { data: tposts = [], refetch, isLoading } = useQuery({
        queryKey: ["tposts"],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/community/communityposts`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='w-76 bg-white rounded-lg p-3 border '>
            <h1 className='text-center font-semibold text-[20px]'>Top Questions</h1>
            <div className="divider "></div>
            {isLoading ? <Loader/> :
                tposts.slice(0, 7).map((tpost, i) =>
                    <TopostsSingle
                        singlePost={tpost}
                        key={i}
                        i={i}
                    ></TopostsSingle>
                )}

        </div>
    );
};

export default TopQuestions;