import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useSingleUser = () => {
    const [user] = useAuthState(auth);
    const [singleUser, setSingleUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) return;

        setLoading(true);
        axios
            .get(`https://hello-talk-webserver.vercel.app/profile?email=${user.email}`)
            .then(res => {
                setSingleUser(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [user]);

    return [singleUser, loading, error];
};

export default useSingleUser;