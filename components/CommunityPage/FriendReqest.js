import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useSingleUser from '../hooks/useSingleUser';
import SingleRequest from './SingleRequest';
import Loader from '../Shared/Loader'

const FriendReqest = () => {
    const [singleUser] = useSingleUser({});
    const [reqStatus, setReqStatus] = useState([])
    const [loader, setLoader] = useState(true)

    const { data: reqStatu = [], refetch, isLoading } = useQuery({
        queryKey: ["reqStatu", singleUser?.email],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/requested?email=${singleUser.email}`);
            const data = await res.json();
            if (data.length) {
                setReqStatus(data)
                // console.log(data)
                setLoader(false)
            }
            else {
                setReqStatus([])
                setLoader(false)
            }
            return data;
        }
    })



    if (loader) {
        return <Loader/>

    }

    return (
        <div className='p-4 bg-[#f5f5f4] shadow-xl mb-6 rounded-md '>
            <h1 className="text-2xl font-bold text-[#333]">Friend Requests</h1>
            { 
                reqStatus.length > 0 ? reqStatus.map((reqSta, i) =>
                    <SingleRequest
                        key={i}
                        reqSta={reqSta}
                        refetch={refetch()}
                    >
                    </SingleRequest>

                ) : <div><h2 className="font-bold text-xl text-center">No friend request</h2></div>
            }
        </div>
    );
};

export default FriendReqest;