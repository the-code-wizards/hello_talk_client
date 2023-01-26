import React from 'react';
import certbg from '../../public/certbg.jpg';
import useSingleUser from '../hooks/useSingleUser';

const Cert = () => {
    const [singleUser] = useSingleUser()
    console.log(singleUser)
    return (
        <div  className="h-[70vh]">
            <img className="absolute " style={{zIndex: -1}} src="https://i.ibb.co/Bgrbwns/edited.jpg" alt=""/>
            <div className="text-center pt-[4rem]">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-[5rem]" src="Logo2.png" alt="/" />
                    <h2 className="text-center font-featherbold text-4xl text-[#96C75A]">CONGRATULATIONS</h2>
                </div>
                {/* <h2 className="text-3xl font-fatherbold mt-6">Congratulations!</h2> */}
                <h2 className="text-[#FF5A66] text-5xl italic font-featherbold my-20">{singleUser?.name}</h2>
                <p className="mt-22">Thank you for choosing <span className="font-bold text-green-400">HelloTalk</span> for being part of English Learning Journey </p>
                <p className="text-[#FFBFD5] mt-2">\^o^/ HelloTalk Team Loves You \^o^/</p>
            </div>
            <button className=' mt-[10rem] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[40%] w-[50%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] mx-auto flex justify-center '
             onClick={() => window.print()}>Print this page</button>            
        </div>
    );
};

export default Cert;