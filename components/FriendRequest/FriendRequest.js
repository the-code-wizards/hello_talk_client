import React from 'react';

const FriendRequest = () => {
    const [singleUser] = useSingleUser({});
    const [reqStatus, setReqStatus] = useState([])
    // console.log(singleUser)

    useEffect(() => {
        fetch(`https://hello-talk-webserver.vercel.app/requested?email=${singleUser.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setReqStatus(data)
                    // console.log(data)
                }
            })

    }, [singleUser?.email])

    return (
        <div className='bg-[#92DEFF] w-80 mb-5'>
            <h1 className='text-center pt-2'>Friend Requests</h1>
            {
                reqStatus.map((reqSta, i) =>
                    <div
                        key={i}
                    >
                        <div className='flex justify-center items-center'>
                            <div className="avatar p-1  rounded-full">
                                <div className="w-10 h-10 rounded-full ">
                                    {
                                        reqSta ?
                                            <img src={reqSta.senderImg} alt="" />
                                            :
                                            <img src="https://i.ibb.co/WnxWNTP/User-Profile-PNG.png" alt="Profile Picture" />
                                    }
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='text-[20px]'>
                                    {reqSta.senderName}
                                </h1>
                            </div>
                        </div>
                        <button className='btn btn-ghost btn-sm flex items-center text-white'>Accept</button>
                    </div>

                )
            }
        </div>
    );
};

export default FriendRequest;