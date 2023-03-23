import React, { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import useFriends from '../hooks/useFriends';
import Loader from '../Shared/Loader';
import useSingleUser from '../hooks/useSingleUser';
import { useQuery } from 'react-query';
import { FaUserPlus } from 'react-icons/fa';


const AllUsers = () => {
    const [users, loading] = useUsers();
    const [friends, loading3] = useFriends();
    const [singleUser] = useSingleUser();
    const [chosenUser, setChosenUser] = useState(null);
    const [isConfirming, setIsConfirming] = useState(false);
    const [reqButtonS, setReqButtonS] = useState(false);
    const nonFriends = users.filter((user) => !friends.includes(user.id));


    useEffect(() => {
        fetch(`http://localhost:5000/myfriends?email=${singleUser?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [singleUser?.email])




    const handleAddFriend = () => {
        const friendData = {
            senderEmail: singleUser.email,
            senderImg: singleUser.photoUrl,
            senderName: singleUser.name,
            reciverEmail: chosenUser.email,
            reciverImg: chosenUser.photoUrl,
            reciverName: chosenUser.name,
            status: 'pending',
        };

        fetch('https://hello-talk-webserver.vercel.app/connect', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(friendData),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.insertedId) {
                    refetch();
                    setIsConfirming(false);
                }
            });
    };

    const { data: reqStatus = [], refetch, isLoading } = useQuery({
        queryKey: ['reqStatus', singleUser?.email],
        queryFn: async () => {
            const res = await fetch(
                `https://hello-talk-webserver.vercel.app/community/srequested?email=${singleUser?.email}&remail=${chosenUser?.email}`
            );
            const data = await res.json();
            if (data.length) {
                setReqButtonS(true);
            } else {
                setReqButtonS(false);
            }
            return data;
        },
    });

    const handleReqDeny = () => {
        fetch(
            `https://hello-talk-webserver.vercel.app/community/reqestdeny?email=${user?.email}&remail=${email}`
        )
            .then((res) => res.json())
            .then((data) => {
                refetch();
            });
    };

    const handleAddFriendClick = (user) => {
        setChosenUser(user);
        handleAddFriend()
        setIsConfirming(true);
    };

    return (
        <div className="drawer md:drawer-mobile  z-[10] left-0 top-0">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="pt-4 bg-[#2D61A0] lg:md:pr-[30px] h-full ">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <input
                    type="search"
                    placeholder="Search name"
                    className="input w-full max-w-sm bg-[#ddd] mt-3 h-9 ml-3"
                />
                <div className="text-white text-sm font-semibold px-3 mt-6">All Users</div>
                {loading ? <Loader />
                    :
                    (
                        <div className="max-h-[calc(100vh)-10vh] overflow-y-auto scrollbar-hidden mt-2">
                            {nonFriends.map((user) => (
                                <div key={user.id} className="flex items-center p-3">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full bg-[#d6e8ff] ring-2 ring-gray-50 mr-2">
                                            {user?.photoUrl ? (
                                                <img src={user?.photoUrl} />
                                            ) : (
                                                <span className="flex justify-center mt-[5px] text-[1.2rem] text-[#333]">
                                                    {user?.name?.slice(0, 2)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-white font-semibold">{user.name}</div>
                                        <div className="text-gray-300">{user.email}</div>
                                    </div>
                                    {!reqButtonS ? (
                                        <button
                                            onClick={() => handleAddFriendClick(user)}
                                            className="bg-white text-[#2D61A0] px-3 py-1 rounded-full"
                                        >
                                            <FaUserPlus />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleReqDeny()}
                                            className="bg-red-500 text-white px-3 py-1 rounded-full"
                                        >
                                            Deny Request
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                {isConfirming && (
                    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center">
                        <div className="bg-white p-4 rounded-lg w-[400px]">
                            <div className="text-center text-xl font-semibold mb-4">
                                Are you sure you want to add {chosenUser.name} as a friend?
                            </div>
                            <div className="flex justify-between">
                                <button
                                    onClick={() => setIsConfirming(false)}
                                    className="px-4 py-2 bg-gray-300 text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddFriend}
                                    className="px-4 py-2 bg-green-400 text-white rounded-lg"
                                >
                                    Add Friend
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default AllUsers;