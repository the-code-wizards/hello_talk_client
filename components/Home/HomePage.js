import React from 'react';
import Feedback from '../Feedback/Feedback';
import Package from '../packages/Package';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const HomePage = () => {
    return (
        <div>
            {/* ---------------Header---------------------------- */}
            <Navbar></Navbar>
            {/* ---------------Header end------------------------ */}

            {/* ---------------Top Banner---------------------------- */}
            <div className="hero min-h-screen bg-[#235390]" style={{ backgroundImage: `url("dot.svg")` }}>
                <div className="hero-content flex-col lg:flex-row lg:justify-between">
                    <img src="earth.svg" />
                    <div className='max-w-[1240px] mx-auto ml-20'>
                        <h1 className='text-white text-3xl font-bold text-center font-featherBold'>The free, fun, and effective way to learn a <br /> language!</h1>
                        <div className='flex flex-col justify-center items-center'>
                            <button className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[50%] hover:bg-[#61E002]">Get Started</button>
                            <button className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[50%] hover:bg-[#61E002]" >I Already Have an Account</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------Top Banner end ---------------------------- */}

            {/* ---------------Middle contents ---------------------------- */}
            <div className='max-w-[1240px] mx-auto  lg:p-[40px]'>
                <div className='grid grid-cols-5'>
                    <img src="bird.svg" className='max-h-[140px] mx-w-[140px]' alt="" />
                    <div className='col-span-4'>
                        <h1 className='font-featherBold text-4xl mb-2 text-[#3C3C3C]' >The world’s #1 way to learn a language</h1>
                        <p>Learning with Duolingo is fun, and research shows that it works! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.</p>
                    </div>
                </div>
                <div className="divider"></div>
            </div>


            <div className='max-w-[1240px] mx-auto'>
                <div>
                    <h1 className='font-featherBold text-3xl text-center text-[#3C3C3C] mb-10'>Why you’ll love learning with Duolingo</h1>
                </div>
                <div className='grid grid-cols-3 place-items-center'>
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
                    <div >
                        <img src="laptop.svg" alt="" />
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
                <div className='grid grid-cols-5 my-20'>
                    <img src="blueOwl.svg" className='max-h-[160px] max-w-[160px] place-self-center' alt="" />
                    <div className='col-span-4'>
                        <h1 className='font-featherBold text-4xl mb-2 text-[#3C3C3C]' >Boost your learning with Super Duolingo</h1>
                        <p>Learning a language on Duolingo is completely free, but you can remove ads and support free education with Super. First 2 weeks on us!</p>
                        <a href="" className='pt-4 text-[#1cb0f6]'>LEARN MORE ABOUT SUPER DUOLINGO</a>
                    </div>
                </div>
                <div className="divider"></div>
            </div>


            <div className='max-w-[1240px] mx-auto '>
                <div className='grid grid-cols-5 my-20'>
                    <img src="chartLaptop.svg" className='max-h-[160px] max-w-[160px] place-self-center' alt="" />
                    <div className='col-span-4'>
                        <h1 className='font-featherBold text-4xl mb-2 text-[#3C3C3C]' >Duolingo for Schools</h1>
                        <p>Free teacher tools to help students learn languages through the Duolingo app, both in and out of the classroom.</p>
                        <a href="" className='pt-4 text-[#1cb0f6]'>BRING DUOLINGO TO YOUR CLASSROOM</a>
                    </div>
                </div>
                <div className="divider"></div>
            </div>

            <div>
                <h1 className='text-3xl text-center font-featherBold mb-8 text-[#3C3C3C]'>Our Packages</h1>
                <Package />
                <div className="divider"></div>
            </div>


            <div className='max-w-[1240px] mx-auto '>
                <div className='grid grid-cols-5 my-20'>
                    <img src="owlchart.svg" className='max-h-[160px] max-w-[160px] place-self-center' alt="" />
                    <div className='col-span-4'>
                        <h1 className='font-featherBold text-4xl mb-2 text-[#3C3C3C]' >Effective and efficient courses</h1>
                        <p>Our courses effectively and efficiently teach reading, listening, and speaking skills. Check out our latest research!</p>
                        <a href="" className='pt-4 text-[#1cb0f6]'>LEARN MORE ABOUT OUR RESEARCH</a>
                    </div>
                </div>
            </div>

            <Feedback />
            {/* ---------------Middle contents ---------------------------- */}

            {/*  -------------------------Footer------------------*/}
            <Footer></Footer>
            {/* -------------------------Footer end--------------*/}
        </div>
    );
};

export default HomePage;