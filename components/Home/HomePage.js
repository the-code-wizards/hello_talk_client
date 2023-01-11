import React from 'react';
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
                <div className="hero-content flex-col lg:flex-row">
                    <img src="earth.svg" />
                    <div>
                        <h1 className='text-white text-3xl font-bold text-center font-featherBold'>The free, fun, and effective way to learn a <br /> language!</h1>
                        <div className='flex flex-col mx-36'>
                            <button className='btn btn-ghost text-white mt-16 bg-green-400 font-featherBold'>Get Started</button>
                            <button className='btn btn-ghost  text-white mt-2 bg-green-400 font-featherBold' >I Already Have an Account</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------Top Banner end ---------------------------- */}



            {/*  _-------------------------Footer------------------*/}
            <Footer></Footer>
            {/*  _-------------------------Footer end--------------*/}
        </div>
    );
};

export default HomePage;