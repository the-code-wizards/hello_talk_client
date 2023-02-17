import { useRouter } from 'next/router';
import Head from "next/head";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import useSingleUser from '../../../components/hooks/useSingleUser';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import ReactPlayer from 'react-player/youtube'

const EnrolledCourse = () => {
    const [singleUser] = useSingleUser()
    const [courseDetails, setCourseDetails] = useState({});
    const { title, picture, module_links, details, offer_price, price, date } = courseDetails;
    const [loading, setLoading] = useState(true)

    const router = useRouter();
    const id = router.query.enrolled;
    console.log(router);
    console.log(courseDetails);
    useEffect(() => {
        setLoading(true);
        axios.get(`https://hello-talk-webserver.vercel.app/course/${id}`)
            .then((res) => {
                setCourseDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);
    // useEffect(() => {
    //     fetch(`https://hello-talk-webserver.vercel.app/course/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCourseDetails(data)
    //             console.log(data);
    //             setLoading(false);
    //         })
    // }, [id])

    if (loading) {
        return <progress className='progress w-full '></progress>
    }
    return (
        <div>
            <Navbar />
            <Head>
                <title>{title}</title>
            </Head>
            <div className="px-8">
                <div className="py-10 pt-[6rem] pb-[4rem]">
                    <h2 className=' text-[#61B800] text-4xl font-bold '>{title}</h2>
                    <h4 className="text-lg font-featherbold">Lingua Marina</h4>
                </div>

                <div className="grid lg:md:grid-cols-3 grid-cols-1 lg:md:gap-x-[8px] gap-y-4 ">
                    {
                        module_links?.map((link) => {
                            return (
                                <>
                                    <div className="flex flex-col">
                                        <ReactPlayer
                                            width="400px"
                                            height="300px"
                                            url={link?.link}
                                            controls={true} />
                                        <h2 className="text-xl text-featherbold mt-[8px] uppercase text-[#61B800]">{link?.title}</h2>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default EnrolledCourse;