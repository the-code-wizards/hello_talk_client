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
        <div className='ml-5 mt-16'>
            <h1 className='text-center pt-2 text-[24px] font-bold'>Friend Requests</h1>
            <div className="divider mt-[-4px]"></div>
            {
                reqStatus.map((reqSta, i) =>
                    <SingleRequest
                        key={i}
                        reqSta={reqSta}
                        refetch={refetch()}
                    >
                    </SingleRequest>

                )
            }
        </div>
    );
};

export default FriendReqest;