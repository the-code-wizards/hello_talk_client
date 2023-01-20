import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const MyProfile = () => {
  const [user] = useAuthState(auth)
  const [loading,setLoading] =useState(true);
  const [profile, setProfile] =useState({});
  console.log(profile);
  const {name, age,education,district, country,number,email}= profile;

  useEffect(() => {
    // if (accessToken) {
        setLoading(true);
        axios
            .get(`https://hello-talk-webserver.vercel.app/profile?email=${user?.email}`)
            .then((res) => {
                setProfile(res?.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    // }
}, []);

  // useEffect(()=>{
  //   fetch(`https://hello-talk-webserver.vercel.app/profile?email=${user?.email}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setProfile(data)
  //     console.log(data)
  //     setLoading(false);
  //   })

  // },[])

  if(loading){
    return <h2>loading...</h2>
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
    console.log(name,age,education, district, country, number, email);
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
    fetch(`https://hello-talk-webserver.vercel.app/upuser `,{
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
    <div className="flex justify-center flex-col shadow-xl my-4">
    
    <div className="flex justify-center flex-col items-center">
      <h3 className="text-4xl text-[#00E019] font-bold my-4">My Profile</h3>
      
    <div className="avatar">
  <div className="w-32 rounded-full border-2-[#00E019]">
    <img src={user?.photoURL ? user?.photoURL : "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"} alt="profile images" />
  </div>
    </div>
    </div>

  <div className="mt-6 grid lg:md:grid-cols-2 md:px-[50px] gap-5">
  {/* <div> */}
  <div className="flex mb-2 items-center justify-between">
    <span>Name: </span>
    <input type="text" defaultValue={name} placeholder="Name" className="input input-bordered w-full  ml-2 " disabled />
  </div>

  <div className="flex mb-2 items-center justify-between">
    <span>Age: </span>
    <input type="text" defaultValue={age} placeholder="Age" className="input input-bordered w-full ml-2 " disabled/>
  </div>

  <div className="flex mb-2 items-center justify-between">
    <span>Education: </span>
    <input type="text" defaultValue={education} placeholder="Education" className="input input-bordered w-full ml-2 " disabled/>
  </div>
  <div className="flex mb-2 items-center justify-between">
    <span>District: </span>
    <input type="text" defaultValue={district} placeholder="District" className="input input-bordered w-full ml-2 " disabled/>
  </div>
  <div className="flex mb-2 items-center justify-between">
    <span>Country: </span>
    <input type="text" defaultValue={country} placeholder="Country" className="input input-bordered w-full ml-2 " disabled/>
  </div>
  <div className="flex mb-2 items-center justify-between">
    <span>Number: </span>
    <input type="number" defaultValue={number} placeholder="Number" className="input input-bordered w-full ml-2 " disabled/>
  </div>
  <div className="flex mb-2 items-center justify-between">
    <span>Email: </span>
    <input type="text" value={email} placeholder="Email" className="input input-bordered w-full ml-2 " disabled/>
  </div>
  {/* </div> */}
  
  </div>
<div className="form-control my-5">

<div className="flex justify-center">

{/* The button to open modal */}
<label htmlFor="edit-profile-modal" className="mt-[15px] text-center max-w-md bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[80%] lg:w-[60%] hover:bg-[#61E002]">Edit</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="edit-profile-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <label htmlFor="edit-profile-modal" className="btn btn-sm bg-[#00E019] border-none  absolute right-2 top-2">Close</label>
  <form onSubmit={handleEditProfile}>
  <div className=" mb-2">
    <span className="">Name</span>
    <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full mt-1" />
  </div>
  <div className=" mb-2">
    <span className="">Age</span>
    <input type="text" name="age" defaultValue={age} placeholder="Age" className="input input-bordered w-full mt-1"/>
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
