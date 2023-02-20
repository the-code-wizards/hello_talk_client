import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import useSingleUser from '../../hooks/useSingleUser';
import { HiStatusOnline, HiStop } from "react-icons/hi";

const MakeLive = () => {
    const [singleUser] = useSingleUser();
    const {name, email, photoURL} = singleUser;
    const [loading, setLoading] = useState(false)

    const {data: mylive = [], refetch, isLoading} = useQuery({
        queryKey: ['mylive'],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/mylive?email=${email}`);
            const data = await res.json()
            return data
        }
    })

    const handleSubmitSession = (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const title = form.title.value;
        const details = form.details.value;
        const category = form.category.value;
        const meetLink = form.meetLink.value;
        const sessionBody = {
            title, details, category, meetLink, 
            teacher_name: name,
            teacher_email: email,
            teacher_photoURL: photoURL,
        }
        fetch(`https://hello-talk-webserver.vercel.app/makelive`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sessionBody)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.acknowledged){
                alert('session created')
                form.reset()
                setLoading(false)
                refetch()
            }
        })
    }


    //for remove live session
    const handleDeletelive = (id) => {
        fetch(`https://hello-talk-webserver.vercel.app/deletelive?email=${mylive?.teacher_email}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch()
                alert('Session deleted')
            }
        })
    }

    return (
        <div className='py-24 px-10'>
            {
                !mylive.teacher_email && <h2 className='text-xl font-featherBold pb-5 text-[#1d4d87]'>Create a session</h2>
            }
            {
                mylive.teacher_email ?
                <div>
                    <div className=" mx-auto font-featherBold rounded-xl bg-[#d7e9ff] p-3 md:p-10 border-4 border-[#2D609F] shadow-xl">
        <div className="">
          <div className="">
            <h2 className="text-2xl text-[#408be7] font-semibold gap-3 flex items-center">
            Now you are in a live session <HiStatusOnline className='text-red-600 animate-ping'></HiStatusOnline>
            </h2>
            <p>You can close your meet when the session is end.</p>

            <p className='text-sm mt-4'>Your live session link is: 
                <a className='pl-2 text-[#408be7]' href={mylive?.meetLink} target="_blank" rel="noreferrer"> {mylive?.meetLink}</a>
            </p>
          </div>

        </div>
          <div className="flex justify-end mt-3">
                <button onClick={handleDeletelive} className="font-featherBold px-5 py-3 rounded-lg text-lg items-center text-white bg-[#2D609F] hover:bg-white hover:text-[#2D609F] flex gap-3 uppercase duration-200 hover:shadow-lg"><HiStop></HiStop>End session</button>
          </div>
      </div>
                </div>
                :
                <div className='md:w-[55%]'>
                <form onSubmit={handleSubmitSession}>
                <input name="title" type="text" className='input w-full bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]'
                placeholder='Session title'
                required
                />
                <textarea name="details" type="text" className='input w-full h-[80px] bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[5px]'
                placeholder='About the session'
                required
                />

                {/* meeting category  */}
                <label className='label label-text'>Select a category for session</label>
                <select required name="category" className="select bg-[#F7F7F7] border-[2px] border-[#e5e3e3] mb-[5px] w-full">
                    <option disabled selected>Session category</option>
                    <option selected>Basic english</option>
                    <option>Medium english</option>
                    <option>Advanced english</option>
                </select>

                <label className='label label-text '>Create a meet and put the link here</label>
                <input name="meetLink" type="url" className='input w-full bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]'
                placeholder='Meet link: https://meet.google.com/000-0000-000'
                required
                />
                <br />
                {
                    loading ? 
                    <button className="btn loading bg-[#1d4d87] border-none w-full" >
                        Creating session...
                </button>
                :
                <button type="submit" className="btn bg-[#1d4d87] border-none w-full" >
                        Create session
                </button>
                }
                </form>
            </div>
            }
        </div>
    );
};

export default MakeLive;