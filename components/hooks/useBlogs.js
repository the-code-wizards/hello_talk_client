import axios from 'axios';
import { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import useToken from './useToken';
import { useAuthState } from 'react-firebase-hooks/auth';

const useBlogs = () => {
  // const [user] = useAuthState(auth);
  // const [token] = useToken(user);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (accessToken) {
    setLoading(true);
    axios
      .get(
        `https://hello-talk-webserver.vercel.app/blogs`
        // {
        // headers: {
        //     Authorization: token,
        // },
        // }
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
    // }
  }, []);

  return [blogs, loading];
};

export default useBlogs;
