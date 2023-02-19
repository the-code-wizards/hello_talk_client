import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const useFriends = () => {
    const [user] = useAuthState(auth);
    const [friends, setFriends] = useState([]);
    const [loading3, setLoading3] = useState(true);

    useEffect(() => {
        setLoading3(true);
        axios.get(`https://hello-talk-webserver.vercel.app/myfriends?email=${user?.email}`)
            .then((res) => {
                setFriends(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading3(false);
            });
    }, [user?.email]);

    return [friends, loading3];
};

export default useFriends;
