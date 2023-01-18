import React from 'react';

const CustomButton = ({children}) => {
    return (
     <>
         <button className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[80%] lg:w-[60%] hover:bg-[#61E002]">{children}</button>
        </>
    );
};

export default CustomButton;