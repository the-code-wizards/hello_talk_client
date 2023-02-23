import React from 'react';
import useFriends from '../hooks/useFriends';
import Loader from '../Shared/Loader';

const AllFriends = () => {
    const [friends, loading3] = useFriends()
    return (
        <div>
            <div className="p-4 bg-[#f5f5f4] shadow-xl mb-2 rounded-md">
                <h2 className="text-2xl font-bold text-[#333]">My Friends</h2>
                {
                    loading3 ? <Loader />
                        :
                        <div>
                            {friends.length > 0 ? friends?.map((friend) => {
                                return (
                                    <div key={friend?._id} className="flex items-center p-3 mb-2">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full bg-[#d6e8ff] ring-2 ring-gray-50 mr-2">
                                                {friend?.photoUrl ? (
                                                    <img src={friend?.photoUrl} />
                                                ) : (
                                                    <span className="flex justify-center mt-[5px] text-[1.2rem] text-[#333]">
                                                        {friend?.name?.slice(0, 2)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="font-semibold text-xl">{friend?.name}</h2>
                                            <p className="font-normal text-md ">{friend?.email}</p>
                                        </div>
                                    </div>
                                )
                            }):
                                <div>
                                    <h2 className="font-bold text-xl text-center">No Friends in the list yet. <span>Add Some!</span></h2>
                                </div>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllFriends;