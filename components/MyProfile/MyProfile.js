import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomButton from "../CustomDesign/CustomButton/CustomButton";

const MyProfile = () => {
  const [user] = useAuthState(auth)
  return (
   <div className="py-32">
    <div className="flex justify-center flex-col">
    
    <div className="flex justify-center">
    <div className="avatar">
  <div className="w-32 rounded-full">
    <img src={user?.photoURL ? user?.photoURL : "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"} alt="profile images" />
  </div>
    </div>
    </div>

  <div className="mt-6 md:px-[300px]">
  <div>
  <div className="flex mb-2 items-center justify-between">
    <span>Name : </span>
    <input type="text" value={user?.displayName} placeholder="Name" className="input input-bordered w-full max-w-lg ml-2 " readOnly />
  </div>

  <div className="flex mb-2 items-center justify-between">
    <span>Age : </span>
    <input type="text" placeholder="Age" className="input input-bordered w-full max-w-lg ml-2 " />
  </div>

  <div className="flex mb-2 items-center justify-between">
    <span>Education : </span>
    <input type="text" placeholder="Education" className="input input-bordered w-full max-w-lg ml-2 " />
  </div>
  <div className="flex mb-2 items-center justify-between">
    <span>District : </span>
    <input type="text" placeholder="District" className="input input-bordered w-full max-w-lg ml-2 " />
  </div>
  <div className="flex mb-2 items-center justify-between">
    <span>Country : </span>
    <input type="text" placeholder="Country" className="input input-bordered w-full max-w-lg ml-2 " />
  </div>
  <div className="flex mb-2 items-center justify-between">
    <span>Number : </span>
    <input type="number" placeholder="Number" className="input input-bordered w-full max-w-lg ml-2 " />
  </div>
  <div className="flex mb-2 items-center justify-between">
    <span>Email : </span>
    <input type="text" value={user?.email} placeholder="Email" className="input input-bordered w-full max-w-lg ml-2 " readOnly/>
  </div>
  </div>
  
  </div>
<div className="form-control my-5">

<div className="flex justify-center">

{/* The button to open modal */}
<label htmlFor="edit-profile-modal" className="mt-[15px] text-center max-w-md bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[80%] lg:w-[60%] hover:bg-[#61E002]">Edit</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="edit-profile-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div className=" mb-2">
    <span className="">Name</span>
    <input type="text" placeholder="Name" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Age</span>
    <input type="text" placeholder="Age" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Eduction</span>
    <input type="text" placeholder="Eduction" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">District</span>
    <input type="text" placeholder="District" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Country</span>
    <input type="text" placeholder="Country" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Number</span>
    <input type="number" placeholder="Number" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Email</span>
    <input type="email" placeholder="Email" className="input input-bordered w-full mt-1" />
  </div>
   
    <div className="modal-action">
      <label htmlFor="edit-profile-modal" className="btn">Submit</label>
    </div>
  </div>
</div>
</div>

</div>

    </div>
   </div>
  );
};

export default MyProfile;
