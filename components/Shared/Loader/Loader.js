import React from 'react';
import Lottie from "lottie-react";
import loader from "../../../resourses/lottieJson/loader.json";

const Loader = () => {
    return (
        <div>
            <div className="w-[300px] h-[300px] mx-auto">
                <Lottie animationData={loader} loop={true} />
            </div>
        </div>
    );
};

export default Loader;