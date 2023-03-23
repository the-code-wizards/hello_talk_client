import React from 'react';

const SingleRequest = ({ reqSta, refetch }) => {
    // console.log(reqSta)
    const handleAccept = () => {
        const req = {
            id: reqSta._id,
            senderImg: reqSta.senderImg,
            senderName: reqSta.senderName,
            senderEmail: reqSta.senderEmail,
            reciverEmail: reqSta.reciverEmail,
            reciverImg: reqSta.reciverImg,
            reciverName: reqSta.reciverName,
        }
        fetch("https://hello-talk-webserver.vercel.app/accepted", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(req)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                refetch
            })
        // console.log(req)
    }


    const handleDeny = () => {
        fetch(`https://hello-talk-webserver.vercel.app/reqdeny?id=${reqSta._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch
            })
    }
    // console.log(reqSta)
    return (
        <div

        >
            <div className="card border border-inherit flex justify-around bg-[#ddd]">
                <div className="avatar">
                    <div className="w-10 rounded-full bg-[#d6e8ff] ring-2 ring-gray-50 mr-2">
                        {reqSta.senderImg ? (
                            <img src={reqSta.senderImg} />
                        ) : (
                            <span className="flex justify-center mt-[5px] text-[1.2rem] text-[#333]">
                                {reqSta.senderName?.slice(0, 2)}
                            </span>
                        )}
                    </div>
                </div>
                <div className="items-center text-center flex flex-col">
                    <h2 className="card-title my-2">{reqSta.senderName}</h2>
                    <div className="flex">
                        <button className="btn btn-sm btn-primary" onClick={handleAccept}>Accept</button>
                        <button className="btn btn-sm btn-ghost" onClick={handleDeny}>Deny</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRequest;