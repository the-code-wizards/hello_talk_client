import React from "react";
import Lottie from "lottie-react";
import loader from "../../../resources/lottieJson/loader.json";

const Loader = () => {
    return (
        <div className="w-[300px] h-[300px] mx-auto">
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default Loader;
