import React from 'react';

const CustomBtn = (btn) => {
    return (
        <>
            <button className='bg-[#fff] border-[#CECECE] border-t-[1.5px] border-b-[2px] border-l-[1.5px] border-r-[1.5px]'>
                {btn}
            </button>

        </>
    );
};

export default CustomBtn;