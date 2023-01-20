import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditCourse = () => {
  const [courseDetails, setCourseDetails] = useState({});

  const router = useRouter();
  const courseid = router.query.editcoursedetail;

  const {
    _id,
    picture,
    title,
    details,
    price,
    date,
    offer_price,
    // author_img,
    // image,
    // tag,
    // package: my_package,
  } = courseDetails;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (accessToken) {
    setLoading(true);
    axios
      .get(`https://hello-talk-webserver.vercel.app/courses/${courseid}`)
      .then((res) => {
        setCourseDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // }
  }, [courseid]);

  console.log(courseDetails);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [courseStatus, setCourseStatus] = useState('');
  console.log(courseStatus);
  const onEditCourse = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className=" pt-[4rem] w-full">
        <div className="">
          <div className="card-body">
            <h2 className="card-title text-[#333]">Edit Course</h2>

            <div className="shadow-xl py-4 px-[8px]">
              <form onSubmit={handleSubmit(onEditCourse)}>
                <div className="w-full flex justify-between gap-x-[10px]">
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Course Title"
                      defaultValue={title}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('courseTitle')}
                    />
                    <input
                      type="text"
                      placeholder="Regular Price"
                      defaultValue={price}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('price')}
                    />
                    <input
                      type="text"
                      placeholder="Offer Price"
                      defaultValue={offer_price}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('offer_price')}
                    />
                    <input
                      type="url"
                      placeholder="Course Image URL"
                      defaultValue={picture}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('image')}
                    />
                  </div>
                  <div className="w-[100%]">
                    <textarea
                      className="textarea w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                      placeholder="Blog Content"
                      defaultValue={details}
                      {...register('details')}
                    />

                    {/* <select
                      className="select select-bordered w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      onChange={(e) => setBlogStatus(e.target.value)}
                      {...register('status')}
                    >
                      <option value="Free">Free</option>
                      <option value="Premium">Premium</option>
                    </select>
                    {blogStatus === 'Premium' && (
                      <>
                        <input
                          type="number"
                          placeholder="Price"
                          className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                          {...register('price')}
                        />
                        <input
                          type="number"
                          placeholder="Gems"
                          className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                          {...register('priceGem')}
                        />
                      </>
                    )} */}
                    {/* <input
                      type="url"
                      placeholder="Blog Image URL"
                      defaultValue={picture}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('image')}
                    /> */}
                  </div>
                </div>
                <button
                  className="mt-[25px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[30%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] flex justify-center mx-auto"
                  type="submit"
                >
                  Edit Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
