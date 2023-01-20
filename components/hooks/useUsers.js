import axios from 'axios';
import { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import useToken from './useToken';
import { useAuthState } from 'react-firebase-hooks/auth';

const useUsers = () => {
  // const [user] = useAuthState(auth);
  // const [token] = useToken(user);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (accessToken) {
    setLoading(true);
    axios
      .get(`https://hello-talk-webserver.vercel.app/allusers`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // }
  }, []);

  return [users, loading];
};

export default useUsers;
