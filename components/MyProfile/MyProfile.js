import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FaTimes, IconName } from "react-icons/fa";
import useSingleUser from "../hooks/useSingleUser";
import loader from "../../resources/lottieJson/loader.json";
import Lottie from "lottie-react";

const MyProfile = () => {
  const [user] = useAuthState(auth)
  // console.log("User: ", user);
  const [loading,setLoading] =useState(true);
  const [singleUser] = useSingleUser()
  const { name, age, education, district, country, number, email, realAge } = singleUser;
  if(loading){
    return <div className="w-[300px] h-[300px] mx-auto">
      <Lottie animationData={loader} loop={true} />
    </div>
  }
  const handleEditProfile=(event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const numAge = form.age.value;
    const education = form.education.value;
    const district = form.district.value;
    const country = form.country.value;
    const number = form.number.value;
    const email = form.email.value;
    let age;
    if(numAge < 18 && numAge > 0){
      age = "young"
    }
    else if(numAge >= 18 ){
      age ="adult"
    }  
    console.log(name, age, realAge ,education, district, country, number, email);
    const userProfile ={
      name,
      age,
      realAge: numAge,
      education,
      district,
      country,
      number,
      email
    }
    fetch(`https://hello-talk-webserver.vercel.app/upuser?email=${user?.email}`,{
      method:"POST",
      headers:{
        'content-type': 'application/json',

      },
      body: JSON.stringify(userProfile)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      location.reload(true);
    })
  }


  return (
   <div className="py-24 px-20">
      {/* bg and profile image */}
      <div className="md:max-w-[650px] mx-auto">
        <div>
        <div className="relative">
          <div className="md:h-[150px] overflow-y-hidden">
            <figure><img className=" w-full rounded-t-lg" src="https://i.ibb.co/vHFLnJ3/istockphoto-1208275881-612x612.jpg" alt="bg image"/></figure>
          </div>
        </div>
        <div className="absolute mt-[-45px] ml-10">
        <div className="avatar">
            <div className="w-24 rounded-full ring ring-white">
              <img src={user?.photoURL ? user?.photoURL : "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"} />
            </div>
        </div>
        </div>
        </div>

        {/* other name and details are here  */}
        <div className="md:mt-3 mt-20">
          <h3 className="text-2xl md:ml-40 ml-5 flex gap-3 font-bold text-[#58cc02]"><span>{name}</span></h3>
          <h3 className="text-md md:ml-40 ml-5 flex gap-3">{email}</h3>
        </div>

        <div className="flex md:ml-40 ml-5 gap-5 text-lg mt-3">
          <div className="font-semibold font-fatherbold flex flex-col gap-y-2">
            <h3>Age:</h3>
            <h3>Education:</h3>
            <h3>District:</h3>
            <h3>Country:</h3>
            <h3>Number:</h3>
          </div>

          <div className="flex flex-col gap-y-2">
            <h3>{realAge}</h3>
            <h3>{education}</h3>
            <h3>{district}</h3>
            <h3>{country}</h3>
            <h3>{number}</h3>
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
  <label htmlFor="edit-profile-modal" className="btn btn-sm bg-[#00E019] border-none  absolute right-2 top-2"><FaTimes></FaTimes></label>
  <form onSubmit={handleEditProfile}>
  <div className=" mb-2">
    <span className="">Name</span>
    <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Age</span>
    <input type="text" name="age" defaultValue={realAge} placeholder="Age" className="input input-bordered w-full mt-1"/>
  </div>
  <div className=" mb-2">
    <span className="">Education</span>
    <input type="text" name="education" defaultValue={education} placeholder="Education" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">District</span>
    <input type="text" name="district" defaultValue={district} placeholder="District" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Country</span>
    <input type="text" name="country" defaultValue={country} placeholder="Country" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Number</span>
    <input type="number" name="number" defaultValue={number} placeholder="Number" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Email</span>
    <input type="email" name="email" defaultValue={email} placeholder="Email" className="input input-bordered w-full mt-1" disabled/>
  </div>
   
    <div className="modal-action">
     <label htmlFor="edit-profile-modal">  
      <button type="submit"  className="btn bg-[#00E019] border-none">Submit</button>
      </label>
    </div>
  </form>
  </div>
</div>
</div>

</div>

        </div>

    </div>
  );
};

export default MyProfile;