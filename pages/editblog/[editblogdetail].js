import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Link from "next/link";
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

  return (
    <div>
      
    </div>
  );
};

export default EditBlog;