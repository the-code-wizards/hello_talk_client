import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
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
  const [blogStatus, setBlogStatus] = useState('');

  const onAddBlog = async (data) => {
    const {
      _id,
      title,
      details,
      // date,
      author_name,
      author_img,
      image,
      tag,
      package: getPack,
    } = data;
    let my_package;
    if (getPack === 'premium') {
      my_package = '3';
    }

    const tags = tag.split(',');

    const blogDetail = {
      _id,
      title,
      details,
      date: currentDate,
      author_name,
      author_img,
      image,
      tag: tags,
      package: getPack,
      gems: my_package,
    };
    fetch('https://hello-talk-webserver.vercel.app/blog', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      // authorization: `bearer ${localStorage.getItem("s-token")}`,
      body: JSON.stringify(blogDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Blog Added');
      });
  };

  return (
    <div className=" pt-[4.5rem] w-full  ">
      <div className="">
        <div className="card-body">
          <h2 className="card-title text-[#1d4d87]">Add Blog</h2>

          <div className="shadow-xl rounded py-4 px-[8px]">
            <form onSubmit={handleSubmit(onAddBlog)}>
              <div className="w-full flex justify-between gap-x-[10px]">
                <div className="w-[100%]">
                  <input
                    type="text"
                    placeholder="Blog Title"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('title', {
                      required: {
                        value: true,
                        message: 'Blog Title is required',
                      },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Author Name"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('author_name', {
                      required: {
                        value: true,
                        message: 'Author Name is required',
                      },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Use comma(,) for multiple tags"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('tag', {
                      required: {
                        value: true,
                        message: 'Blog Tags is required',
                      },
                    })}
                  />
                  <input
                    type="url"
                    placeholder="Author Image URL"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('author_img', {
                      required: {
                        value: true,
                        message: 'Author Image URL is required',
                      },
                    })}
                  />
                  {/* <input
                    type="number"
                    placeholder="Gems"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('priceGem')}
                  /> */}
                </div>
                <div className="w-[100%]">
                  <textarea
                    className="textarea w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                    placeholder="Blog Content"
                    {...register('details', {
                      required: {
                        value: true,
                        message: 'Blog Content is required',
                      },
                    })}
                  />

                  <select
                    className="select select-bordered w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    onChange={(e) => setBlogStatus(e.target.value)}
                    {...register('package', {
                      required: {
                        value: true,
                        message: 'Status is required',
                      },
                    })}
                  >
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                  </select>
                  <select
                    className="select select-bordered w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    onChange={(e) => setBlogStatus(e.target.value)}
                    {...register('age', {
                      required: {
                        value: true,
                        message: 'Status is required',
                      },
                    })}
                  >
                    <option value="natural">Neutral</option>
                    <option value="young">Young</option>
                    <option value="adult">Adult</option>
                  </select>

                  <input
                    type="url"
                    placeholder="Blog Image URL"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('image', {
                      required: {
                        value: true,
                        message: 'Blog Image URL is required',
                      },
                    })}
                  />
                </div>
              </div>
              <button
                className="mt-[25px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[30%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] flex justify-center mx-auto"
                type="submit"
                // onClick={onAddBlog}
              >
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
