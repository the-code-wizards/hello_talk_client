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

    return (
        <div

        >
            <div className="card w-52 border border-inherit">
                <figure><img src={reqSta.senderImg} alt="Profile Picture" className='w-52 h-44 object-cover' /></figure>
                <div className="items-center text-center flex flex-col mt-2 mb-5">
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