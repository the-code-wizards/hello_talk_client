import React from 'react';
import Feedback from '../Feedback/Feedback';
import Package from '../packages/Package';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Lottie from "lottie-react";
import learning from "../../resourses/lottieJson/online-learning.json";
import laptop from "../../resourses/lottieJson/laptop.json";
import SendEmailCard from './SendEmailCard';
import Blog from '../Blog/Blog';
import BlogForHome from '../Blog/BlogForHome';


const HomePage = () => {
    return (
        <div >
            {/* ---------------Header---------------------------- */}
            <Navbar></Navbar>
            {/* ---------------Header end------------------------ */}

            {/* ---------------Top Banner---------------------------- */}
            <div className="hero min-h-[80vh] pt-[50px] lg:pt-[50px]" style={{ backgroundImage: `url("back.svg")` }}>
                <div className="hero-content flex-col lg:flex-row lg:justify-between">
                    <Lottie animationData={learning} loop={true} />
                    <div className='max-w-[1240px] mx-auto lg:ml-20'>
                        <h1 className='text-white text-3xl lg:md:text-4xl font-bold text-center font-featherBold '>The free, fun, and effective way to learn language!</h1>
                        <div className='flex flex-col justify-center items-center mt-8'>
                            <button className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] pb-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[80%] lg:w-[60%] hover:bg-[#61E002] pt-[.75rem]">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------Top Banner end ---------------------------- */}

            {/* ---------------Middle contents ---------------------------- */}
            <div className="lg:md:px-0 px-4">
                <div className='max-w-[1240px] mx-auto lg:p-[40px] lg:md:mt-4 mt-6'>
                    <div className='grid grid-cols-1  lg:grid-cols-5 '>
                        <div className='col-span-1 place-self-center'>
                            <img src="Logo.png" className='max-h-[160px] mx-w-[160px] ' alt="" />

                        </div>
                        <div className='col-span-4 place-self-center'>
                            <h1 className='font-featherBold lg:md:text-start text-center lg:md:text-4xl text-2xl mb-2 text-[#3C3C3C]' >The world’s Top way to learn a language</h1>
                            <p className="lg:md:text-start text-center">Learning with Hello Talk is fun, and research shows that it works! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>


                <div className='max-w-[1240px] mx-auto'>
                    <div>
                        <h1 className='font-featherBold lg:md:text-4xl text-2xl text-center text-[#3C3C3C] mb-10'>Why you’ll love learning with Hello Talk</h1>
                    </div>
                    <div className='grid grid-cols-1  lg:grid-cols-3 place-items-center'>
                        <div>
                            <div className='grid grid-cols-8 p-5'>
                                <div className='cols-span-1 '>
                                    <img src="fire.svg" alt="" />
                                </div>
                                <div className='col-span-7 mt-2'>
                                    <h1 className='text-xl font-featherBold text-[#3C3C3C]'>Effective and efficient</h1>
                                    <p>Our courses effectively and efficiently teach reading, listening, and speaking skills. Check out our latest research!</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-8 p-5'>
                                <div className='cols-span-1 '>
                                    <img src="greenMark.svg" alt="" />
                                </div>
                                <div className='col-span-7 mt-2'>
                                    <h1 className='text-xl font-featherBold text-[#3C3C3C]'>Personalized learning</h1>
                                    <p>Our courses effectively and efficiently teach reading, listening, and speaking skills. Check out our latest research!</p>
                                </div>
                            </div>
                        </div>
                        <div className=' h-[300px] w-[300px] lg:h-[450px] lg:w-[450px] ' >
                            <Lottie animationData={laptop} loop={true} />
                        </div>
                        <div>
                            <div className='grid grid-cols-8 p-5'>
                                <div className='cols-span-1 '>
                                    <img src="crown.svg" alt="" />
                                </div>
                                <div className='col-span-7 mt-2 ml-2'>
                                    <h1 className='text-xl font-featherBold text-[#3C3C3C]'>Stay motivated</h1>
                                    <p>We make it easy to form a habit of language learning, with game-like features, fun challenges, and reminders from our friendly mascot, Duo the owl.</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-8 p-5'>
                                <div className='cols-span-1 '>
                                    <img src="smily.svg" alt="" />
                                </div>
                                <div className='col-span-7 mt-2 ml-2'>
                                    <h1 className='text-xl font-featherBold text-[#3C3C3C]'>Have fun with it!</h1>
                                    <p>Effective learning doesn’t have to be boring! Build your skills each day with engaging exercises and playful characters.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="divider"></div>
                </div>

                <div className='max-w-[1240px] mx-auto  '>
                    <div className='grid grid-cols-1  lg:grid-cols-5 my-10'>
                        <img src="Logo2.png" className='max-h-[160px] max-w-[160px] place-self-center' alt="" />
                        <div className='col-span-4 place-self-center'>
                            <h1 className='font-featherBold lg:md:text-start text-center lg:md:text-4xl mb-2 text-[#3C3C3C] text-2xl' >Boost your learning with Super Hello Talk</h1>
                            <p className="lg:md:text-start text-center">Learning a language on Hello Talk is completely free, but you can remove ads and support free education with Super. First 2 weeks on us!</p>
                            {/* <a href="" className='pt-4 text-[#1cb0f6] lg:md:text-start text-center'>LEARN MORE ABOUT SUPER Hello Talk</a> */}
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>

                <div>
                    <h1 className='lg:md:text-3xl text-2xl text-center font-featherBold mb-8 text-[#3C3C3C]'>Packages that you`&apos;`ll love</h1>
                    <Package />
                    <div className="divider"></div>
                </div>


                <div className='max-w-[1240px] mx-auto '>
                    <div className='grid grid-cols-1  lg:grid-cols-5 my-10'>
                        <div className='col-span-1 place-self-center'>
                            <img src="Logo.png" className='max-h-[160px] max-w-[160px] place-self-center' alt="" />
                        </div>
                        <div className='col-span-4 place-self-center'>
                            <h1 className='font-featherBold lg:text-4xl lg:md:text-start text-center text-2xl mb-2 text-[#3C3C3C] sm:text-2xl' >Effective and efficient courses</h1>
                            <p className="lg:md:text-start text-center">Our courses effectively and efficiently teach reading, listening, and speaking skills. Check out our latest research! Learn about us. Thank you!</p>
                            <a href="" className='pt-4 text-[#1cb0f6] lg:md:text-start text-center'>LEARN MORE ABOUT OUR RESEARCH</a>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>

                {/* _______________________________Blog___________________________ */}

                <div>
                    <h1 className='font-featherBold lg:md:text-3xl text-2xl text-center text-[#3C3C3C] my-2'>Twinkle twinkle little star, you`&apos;`ll love our chronicle</h1>
                    <h2 className='font-featherBold lg:md:text-xl text-lg text-center text-[#3C3C3C]'>Start Reading our blogs</h2>
                    <BlogForHome></BlogForHome>
                    <div className="divider max-w-[1240px] mx-auto"></div>
                </div>

                {/* ---------------Middle contents ---------------------------- */}

                <div>
                    <SendEmailCard></SendEmailCard>
                    <div className="divider max-w-[1240px] mx-auto"></div>
                </div>

                {/*  -------------------------Footer------------------*/}

                <div className='mb-32 mt-16 max-w-[1240px] mx-auto hidden lg:md:block'>
                    <h1 className='font-featherBold text-3xl text-center text-[#3C3C3C] my-10 mb-10'>What Our Amazing User Says</h1>
                    <Feedback></Feedback>
                </div>
            </div>
            <Footer></Footer>
            {/* -------------------------Footer end--------------*/}
        </div>
    );
};

export default HomePage;