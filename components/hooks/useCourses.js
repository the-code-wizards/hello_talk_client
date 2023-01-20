import axios from 'axios';
import { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import useToken from './useToken';
import { useAuthState } from 'react-firebase-hooks/auth';

const useCourses = () => {
  // const [user] = useAuthState(auth);
  // const [token] = useToken(user);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (accessToken) {
    setLoading(true);
    axios
      .get(`https://hello-talk-webserver.vercel.app/courses`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // }
  }, []);

  return [courses, loading];
};

export default useCourses;
