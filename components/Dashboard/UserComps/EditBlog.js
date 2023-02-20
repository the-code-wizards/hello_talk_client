import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditBlog = () => {
  // const navigate = useNavigate();
  const [blogDetails, setBlogDetails] = useState({});

  const router = useRouter();
  const blogid = router.query.editblogdetail;

  const currentdate = new Date();
  const newDate = currentdate.toLocaleDateString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

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
    age,
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
        // console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // }
  }, [blogid]);

  // console.log("This is blogDetails",blogDetails);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [blogStatus, setBlogStatus] = useState('free');
  // console.log(blogStatus);

  const onEditBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author_name = form.author_name.value;
    const details = form.details.value;
    const tag = form.tag.value;
    const getPack = blogStatus;
    const myAge = form.age.value;
    let userAge;
    if (myAge) {
      if (myAge < 18) {
        userAge = 'young';
      }
      if (myAge >= 18) {
        userAge = 'adult';
      }
      // if ((myAge = ' ')) {
      //   userAge = 'neutral';
      // }
    }
    let my_package;
    if (getPack === 'premium') {
      my_package = 3;
    } else {
      my_package = null;
    }

    const tags = tag.split(',');
    const editBlogBody = {
      title1: title,
      details1: details,
      date1: newDate,
      author_name1: author_name,
      author_img1: author_img,
      image1: image,
      tag1: tags,
      package1: getPack,
      gems1: my_package,
      age1: userAge,
    };
    // console.log('edit blog body', editBlogBody);

    fetch(`https://hello-talk-webserver.vercel.app/upblog?id=${_id}`, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      // authorization: `bearer ${localStorage.getItem("s-token")}`,
      body: JSON.stringify(editBlogBody),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Edit blog Successful');
        // navigate("/allblogs");
        // window.location('/allblogs');
      });

    // axios({
    //   method: 'POST',
    //   url: `https://hello-talk-webserver.vercel.app/upblog?id=${_id}`,
    //   data: editBlogBody,
    // });
    // useEffect(() => {
    //   fetch(`https://hello-talk-webserver.vercel.app/upblog/${_id}`, {
    //     method: 'POST',
    //     headers: { 'content-Type': 'application/json' },
    //     // authorization: `bearer ${localStorage.getItem("s-token")}`,
    //     body: JSON.stringify(editBlogBody),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       alert('Edit blog Successful');
    //       console.log(data);
    //     });
    // }, []);

    // console.log('This is data', title, details, tag, getPack);
  };

  return (
    <div>
      <div className=" pt-[4.5rem] w-full  ">
        <div className="">
          <div className="card-body">
            <h2 className="card-title text-[#333]">Edit Blog</h2>

            <div className="shadow-xl py-4 px-[8px]">
              <form onSubmit={onEditBlog}>
                <div className="w-full flex justify-between gap-x-[10px]">
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Blog Title"
                      defaultValue={title}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      name="title"
                    />
                    <input
                      type="text"
                      placeholder="Author Name"
                      defaultValue={author_name}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      name="author_name"
                    />
                    <input
                      type="text"
                      placeholder="Use comma(,) for multiple tags"
                      defaultValue={tag}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      // {...register('tags')}
                      name="tag"
                    />
                    {/* <input
                      type="url"
                      placeholder="Author Image URL"
                      defaultValue={author_img}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('image')}
                    /> */}
                  </div>
                  <div className="w-[100%]">
                    <textarea
                      className="textarea w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                      placeholder="Blog Content"
                      defaultValue={details}
                      // {...register('courseContent')}
                      name="details"
                    />

                    <select
                      className="select select-bordered w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      onChange={(e) => setBlogStatus(e.target.value)}
                      // {...register('status')}
                      name="package"
                    >
                      <option value="free">Free</option>
                      <option value="premium">Premium</option>
                    </select>
                    {/* {blogStatus === 'Premium' && (
                      <>
                        <input
                          type="number"
                          placeholder="Price"
                          className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                          // {...register('price')}
                          name="price"
                        />
                        <input
                          type="number"
                          placeholder="Gems"
                          className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                          // {...register('priceGem')}
                          name="gems"
                        />
                      </>
                    )} */}

                    <input
                      type="text"
                      placeholder="Age"
                      defaultValue={age}
                      className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      // {...register('image')}
                      name="age"
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
