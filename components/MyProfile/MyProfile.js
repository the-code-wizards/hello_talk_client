import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FaTimes } from "react-icons/fa";
import useSingleUser from "../hooks/useSingleUser";
import Link from "next/link";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [singleUser] = useSingleUser();
  const [selectedImg, setSelectedImg] = useState(undefined)
  const [userImg, setUserImg] = useState('')
  const { name, age: myage, photoURL, education, district, country, number, email, realAge } =
    singleUser;
  const handleEditProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const numAge = form.age.value;
    const education = form.education.value;
    const district = form.district.value;
    const country = form.country.value;
    const number = form.number.value;
    const email = form.email.value;
    let realAge;
    if (numAge < 18 && numAge > 0) {
      realAge = "young";
    } else if (numAge >= 18) {
      realAge = "adult";
    }
    const userProfile = {
      name,
      age: numAge,
      realAge,
      education,
      district,
      country,
      number,
      email,
    };
    fetch(
      `https://hello-talk-webserver.vercel.app/upuser?email=${user?.email}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userProfile),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        location.reload(true);
      });
  };

  // change the photo preview 
  const handlePreviewPhoto = (e) => {
    const imgfile = e.target.files[0]
    const url = URL.createObjectURL(imgfile)
    setSelectedImg(url)
    setUserImg(imgfile)
  }

  //update Profile picture
  const handleUpdateProfileImg = (e) => {
    e.preventDefault();
    const imgbbsecret = 'd8cf4210ca9e59597c20c2db0651d6a7'
    const formData = new FormData();
    formData.append('image', userImg);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbsecret}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(pictureData => {
        // console.log(pictureData)
        if (pictureData.success) {
          const photourl = pictureData.data.url;
          const photobody = {
            photoURL: photourl
          }
          fetch(`https://hello-talk-webserver.vercel.app/upimage?email=${email}`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(photobody)
          })
            .then(res => res.json())
            .then((data) => {
              alert('profile picture updated')
            })
        }

      })
  }

  return (
    <div className="py-24 font-featherBold">
        {/* Disclaimer of apply for teacher  */}
      <div className="md:px-5 px-3 mb-5 ">
        <div className="alert shadow-lg py-1 bg-[#e9f3ff]">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Are you a teacher? If you are a teacher you can now apply for a teaching role.</span>
          </div>
          <div className="">
            <Link href='/dashboard/applyteacher'><button className="btn btn-sm bg-[#2C5F9E] border-b-4 border-[#264d7c] text-[#fff]">Apply now</button></Link>
          </div>
        </div>
      </div>
      {/* bg and profile image */}
      <div className="md:max-w-[95%]  mx-auto  px-20">
      
        <div>
          <div className="">
            <div className="md:h-[150px] overflow-y-hidden ">
              <figure>
                <img
                  className=" w-full rounded-t-lg "
                  src="https://i.ibb.co/vHFLnJ3/istockphoto-1208275881-612x612.jpg"
                  alt="bg image"
                />
              </figure>
            </div>
          </div>
          <div className=" mt-[-45px] ml-10">
            {/* The button to open modal */}{/*Tap to add a profile picture*/}
            <label htmlFor="uploadPhotoModal" className="cursor-pointer ">
              <div className="avatar  tooltip md:tooltip-top tooltip-right" data-tip="Tap to change photo">
                <div className="w-24 rounded-full ring ring-white hover:shadow-xl">
                  <img
                    className=""
                    src={
                      photoURL
                        ? photoURL
                        : "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
                    }
                  />
                </div>
              </div>
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="uploadPhotoModal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box ">
                <div className="flex justify-end">
                <label htmlFor="uploadPhotoModal" className="btn btn-sm btn-circle  right-2 top-2">✕</label>
                </div>
                <h3 className="text-lg font-bold text-center">Chose a file to upload photo</h3>
                <p className='text-center text-gray-400'>and click on upload button</p>
                <div className="flex justify-center items-center">
                  {selectedImg && <>
                    <div className="w-[200px] h-[200px] rounded-full mt-5">
                      <img src={selectedImg} alt="" className="rounded-full w-[200px] h-[200px]" />
                    </div>
                  </>}
                </div>

                <div className={selectedImg && "mt-5"}>
                  <form onSubmit={handleUpdateProfileImg}>
                    <input accept="image/jpeg, image/png" onChange={handlePreviewPhoto} type="file" className="file-input" />
                    {/* <h2>{profileImg}</h2> */}
                    {selectedImg && <button className="bg-[#58cc02] btn border-0" type="submit">Upload</button>}
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* other name and details are here  */}
        <div className="md:mt-3 mt-20">
          <h3 className="text-2xl md:ml-40 ml-5 flex gap-3 font-bold text-[#58cc02]">
            <span>{name}</span>
          </h3>
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
            <h3>{myage}</h3>
            <h3>{education}</h3>
            <h3>{district}</h3>
            <h3>{country}</h3>
            <h3>{number}</h3>
          </div>
        </div>

        <div className="form-control my-5">
          <div className="flex justify-center">
            {/* The button to open modal */}
            <label
              htmlFor="edit-profile-modal"
              className="mt-[15px] text-center max-w-md bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[80%] lg:w-[60%] hover:bg-[#61E002]"
            >
              Edit
            </label>

            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id="edit-profile-modal"
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box">
                <label
                  htmlFor="edit-profile-modal"
                  className="btn btn-sm bg-[#00E019] border-none  right-2 top-2"
                >
                  <FaTimes></FaTimes>
                </label>
                <form onSubmit={handleEditProfile}>
                  <div className=" mb-2">
                    <span className="">Name</span>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Name"
                      className="input input-bordered w-full mt-1"
                    />
                  </div>
                  <div className=" mb-2">
                    <span className="">Age</span>
                    <input
                      type="text"
                      name="age"
                      defaultValue={myage}
                      placeholder="Age"
                      className="input input-bordered w-full mt-1"
                    />
                  </div>
                  <div className=" mb-2">
                    <span className="">Education</span>
                    <input
                      type="text"
                      name="education"
                      defaultValue={education}
                      placeholder="Education"
                      className="input input-bordered w-full mt-1"
                    />
                  </div>
                  <div className=" mb-2">
                    <span className="">District</span>
                    <input
                      type="text"
                      name="district"
                      defaultValue={district}
                      placeholder="District"
                      className="input input-bordered w-full mt-1"
                    />
                  </div>
                  <div className=" mb-2">
                    <span className="">Country</span>
                    <input
                      type="text"
                      name="country"
                      defaultValue={country}
                      placeholder="Country"
                      className="input input-bordered w-full mt-1"
                    />
                  </div>
                  <div className=" mb-2">
                    <span className="">Number</span>
                    <input
                      type="number"
                      name="number"
                      defaultValue={number}
                      placeholder="Number"
                      className="input input-bordered w-full mt-1"
                    />
                  </div>
                  <div className=" mb-2">
                    <span className="">Email</span>
                    <input
                      type="email"
                      name="email"
                      defaultValue={email}
                      placeholder="Email"
                      className="input input-bordered w-full mt-1"
                      disabled
                    />
                  </div>

                  <div className="modal-action">
                    <label htmlFor="edit-profile-modal">
                      <button
                        type="submit"
                        className="btn bg-[#00E019] border-none"
                      >
                        Submit
                      </button>
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