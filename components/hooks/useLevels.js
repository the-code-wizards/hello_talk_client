import axios from "axios";
import { useEffect, useState } from "react";

const useOrderList = () => {
    const [levels, setLevels] = useState([]);
    const [loading2, setLoading2] = useState(true);



    useEffect(() => {
        setLoading2(true);
        axios.get(`https://hello-talk-webserver.vercel.app/levels`)
            .then((res) => {
                setLevels(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading2(false);
            });
    }, []);

    return [levels, loading2];
};

export default useOrderList;