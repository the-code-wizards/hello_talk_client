import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditTeacher = () => {
  const [teacherDetails, setTeacherDetails] = useState({});

  const router = useRouter();
  const courseid = router.query.editteacherdetail;

  const currentdate = new Date();

  const { _id, name, details, date, qualification, image } = teacherDetails;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (accessToken) {
    setLoading(true);
    axios
      .get(`https://hello-talk-webserver.vercel.app/teacher/${courseid}`)
      .then((res) => {
        setTeacherDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // }
  }, [courseid]);

  // console.log(teacherDetails);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [teacherStatus, setTeacherStatus] = useState('');
  // console.log(courseStatus);
  const onEditTeacher = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const details = form.details.value;
    const qualification = form.qualification.value;

    const editTeacherBody = {
      name1: name,
      image1: image,
      details1: details,
      date1: currentdate,
      qualification1: qualification,
    };
    // console.log('Edit teacher', editTeacherBody);
    fetch(`https://hello-talk-webserver.vercel.app/updateteacher?id=${_id}`, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      // authorization: `bearer ${localStorage.getItem("s-token")}`,
      body: JSON.stringify(editTeacherBody),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Edit Teacher details Successfull');
        // console.log(data);
      });
  };

  return (
    <div>
      <div className=" pt-[4.5rem] w-full  ">
        <div className="">
          <div className="card-body">
            <h2 className="card-title text-[#333]">Edit Teacher Details</h2>

            <div className="shadow-xl py-4 px-[8px]">
              <form onSubmit={onEditTeacher}>
                <div className="w-full flex justify-between gap-x-[10px]">
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Teacher's Name"
                      defaultValue={name}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      name="name"
                    />
                    <input
                      type="text"
                      placeholder="Teacher's Qualification"
                      defaultValue={qualification}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      name="qualification"
                    />
                    <input
                      type="url"
                      placeholder="Teacher's Image URL"
                      defaultValue={image}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      name="image"
                    />
                  </div>
                  <div className="w-[100%]">
                    <textarea
                      className="textarea w-full h-40 max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                      placeholder="Teacher's Details"
                      defaultValue={details}
                      name="details"
                    />
                  </div>
                </div>
                <button
                  className="mt-[25px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[30%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] flex justify-center mx-auto"
                  type="submit"
                >
                  Edit Teacher Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTeacher;
