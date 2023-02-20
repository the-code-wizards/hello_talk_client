import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddCourse = () => {
  const currentDate = new Date();
  // const date = currentdate.toLocaleDateString('en-US', {
  //   hour: '2-digit',
  //   minute: '2-digit',
  // });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [courseStatus, setCourseStatus] = useState('');
  const onAddCourse = async (data) => {
    const { _id, picture, title, details, price, offer_price, date, module_links } = data;

    const links = module_links.split('\n');

    const courseDetail = {
      _id,
      picture,
      title,
      details,
      price,
      offer_price,
      date: currentDate,
      module_links: links,
    };
    fetch(`https://hello-talk-webserver.vercel.app/course`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(courseDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Course Added');
      });
  };
  return (
    <div className=" pt-[4.5rem] w-full  ">
      <div className="">
        <div className="card-body">
          <h2 className="card-title text-[#333]">Add Course</h2>

          <div className="shadow-xl py-4 px-[8px]">
            <form onSubmit={handleSubmit(onAddCourse)}>
              <div className="w-full flex justify-between gap-x-[10px]">
                <div className="w-[100%]">
                  <input
                    type="text"
                    placeholder="Course Title"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('title', {
                      required: {
                        value: true,
                        message: 'Course Title is required',
                      },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Regular Price"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('price', {
                      required: {
                        value: true,
                        message: 'Author Name is required',
                      },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Offer Price"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('offer_price', {
                      required: {
                        value: true,
                        message: 'Course Tags is required',
                      },
                    })}
                  />
                  <input
                    type="url"
                    placeholder="Course Image URL"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('picture', {
                      required: {
                        value: true,
                        message: 'Course Image URL is required',
                      },
                    })}
                  />
                </div>
                <div className="w-[100%]">
                  <textarea
                    className="textarea w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                    placeholder="Course Content"
                    {...register('details', {
                      required: {
                        value: true,
                        message: 'Course Content is required',
                      },
                    })}
                  />
                  <textarea
                    className="textarea w-full h-[155px] max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                    placeholder="Use space for multiple links"
                    {...register('module_links', {
                      required: {
                        value: true,
                        message: 'Module Links is required',
                      },
                    })}
                  />
                </div>
              </div>
              <button
                className="mt-[25px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[30%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] flex justify-center mx-auto"
                type="submit"
              >
                Add Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
