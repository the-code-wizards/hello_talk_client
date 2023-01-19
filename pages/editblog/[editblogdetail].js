import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import DashSidebar from '../../components/Dashboard/DashSidebar';

const EditBlog = () => {
  const [blogDetails, setBlogDetails] = useState({});

  const router = useRouter();
  const blogid = router.query.editblogdetail;

  const {
    _id,
    title,
    details,
    date,
    author_name,
    author_img,
    image,
    tag,
    package: my_package,
  } = blogDetails;

  useEffect(() => {
    fetch(`https://hello-talk-webserver.vercel.app/blogs/${blogid}`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, [blogid]);

  console.log(blogid);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [blogStatus, setBlogStatus] = useState('');
  console.log(blogStatus);
  const onAddBlog = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" pt-[4rem] w-full">
        <div className="">
          <div className="card-body">
            <h2 className="card-title text-[#333]">Add Blog</h2>

            <div className="shadow-xl py-4 px-[8px]">
              <form onSubmit={handleSubmit(onAddBlog)}>
                <div className="w-full flex justify-between gap-x-[10px]">
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Blog Title"
                      defaultValue={title}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('courseTitle', {
                        required: {
                          value: true,
                          message: 'Blog Title is required',
                        },
                      })}
                    />
                    <input
                      type="text"
                      placeholder="Author Name"
                      defaultValue={author_name}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('author', {
                        required: {
                          value: true,
                          message: 'Author Name is required',
                        },
                      })}
                    />
                    <input
                      type="text"
                      placeholder="Blog Tags"
                      defaultValue={tag}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('tags', {
                        required: {
                          value: true,
                          message: 'Blog Tags is required',
                        },
                      })}
                    />
                    <input
                      type="url"
                      placeholder="Blog Image URL"
                      defaultValue={author_img}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('image', {
                        required: {
                          value: true,
                          message: 'Blog Image URL is required',
                        },
                      })}
                    />
                  </div>
                  <div className="w-[100%]">
                    <textarea
                      className="textarea w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                      placeholder="Blog Content"
                      defaultValue={details}
                      {...register('courseContent', {
                        required: {
                          value: true,
                          message: 'Blog Content is required',
                        },
                      })}
                    />

                    <select
                      className="select select-bordered w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      onChange={(e) => setBlogStatus(e.target.value)}
                      {...register('status', {
                        required: {
                          value: true,
                          message: 'Status is required',
                        },
                      })}
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
                    )}
                    <input
                      type="url"
                      placeholder="Blog Image URL"
                      defaultValue={image}
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
                >
                  Add Blog
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
