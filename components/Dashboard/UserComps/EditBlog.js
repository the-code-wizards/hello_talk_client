import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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

  // useEffect(() => {
  //   fetch(`https://hello-talk-webserver.vercel.app/blogs/${blogid}`)
  //     .then((res) => res.json())
  //     .then((data) => setBlogDetails(data));
  // }, [blogid]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (accessToken) {
    setLoading(true);
    axios
      .get(`https://hello-talk-webserver.vercel.app/blogs/${blogid}`)
      .then((res) => {
        setBlogDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // }
  }, [blogid]);

  console.log(blogDetails);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [blogStatus, setBlogStatus] = useState('');
  console.log(blogStatus);
  const onEditBlog = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className=" pt-[4rem] w-full">
        <div className="">
          <div className="card-body">
            <h2 className="card-title text-[#333]">Edit Blog</h2>

            <div className="shadow-xl py-4 px-[8px]">
              <form onSubmit={handleSubmit(onEditBlog)}>
                <div className="w-full flex justify-between gap-x-[10px]">
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Blog Title"
                      defaultValue={title}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('courseTitle')}
                    />
                    <input
                      type="text"
                      placeholder="Author Name"
                      defaultValue={author_name}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('author')}
                    />
                    <input
                      type="text"
                      placeholder="Blog Tags"
                      defaultValue={tag}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('tags')}
                    />
                    <input
                      type="url"
                      placeholder="Author Image URL"
                      defaultValue={author_img}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('image')}
                    />
                  </div>
                  <div className="w-[100%]">
                    <textarea
                      className="textarea w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                      placeholder="Blog Content"
                      defaultValue={details}
                      {...register('courseContent')}
                    />

                    <select
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
                    )}
                    <input
                      type="text"
                      placeholder="Blog Image URL"
                      defaultValue={image}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('image')}
                    />
                  </div>
                </div>
                <button
                  className="mt-[25px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[30%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] flex justify-center mx-auto"
                  type="submit"
                >
                  Edit Blog
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
