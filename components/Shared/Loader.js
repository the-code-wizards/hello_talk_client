import React from 'react';
import Lottie from "lottie-react";
import loader from "../../resourses/lottieJson/loader.json";

const Loader = () => {
    return (
        <div>
             <div className="w-[200px] h-[200px]">
                                <Lottie animationData={loader} loop={true} />
                           </div>
        </div>
    );
};

export default Loader;