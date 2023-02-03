import axios from 'axios';
import { useEffect, useState } from 'react';

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(
      `https://hello-talk-webserver.vercel.app/blogs`
    )
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [blogs, loading];
};

export default useBlogs;
