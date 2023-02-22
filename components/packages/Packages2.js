import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Packages2 = () => {
    const [user] = useAuthState(auth);

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5  mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-[#61B800] flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                            <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#61B800] text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Learning Contents
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-500 text-white rounded-full flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg>
                                </span>Unlimited Gems
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-500 text-white rounded-full flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg>
                                </span>Special surprise contents
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-500 text-white rounded-full flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg>
                                </span>Up to 3 premium courses for free
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-500 text-white rounded-full flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg>
                                </span>Read all premium blog articles for free
                            </p>
                            <button className="flex items-center mt-auto text-white bg-[#61B800] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded " disabled  >Already Using
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="text-xs text-gray-500 mt-3">Literally you probably havent heard of them jean shorts.</p>
                        </div>
                    </div>
                    <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-[#61B800] flex flex-col relative overflow-hidden">
                            <span className="bg-[#61B800] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>$38</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/yr</span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#61B800] text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Learning Contents
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#61B800] text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Unlimited Gems
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#61B800] text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Special surprise contents
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#61B800] text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Up to 3 premium courses for free
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#61B800] text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Read all premium blog articles for free
                            </p>
                            {user ?
                                <Link href="payments/63f60cc987cfb8eeac02b85c"> <button className="flex items-center mt-auto text-white bg-[#61B800] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Pay Now
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button></Link>
                                :
                                <Link href="/signin"> <button className="flex items-center mt-auto text-white bg-[#61B800] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Pay Now
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button></Link>

                            }
                            <p className="text-xs text-gray-500 mt-3">Literally you probably haven&apos;t heard of them jean shorts.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Packages2;