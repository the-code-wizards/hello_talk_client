import axios from "axios";
import { useEffect, useState } from "react";

const useOrderList = () => {
    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
            setLoading(true);
            axios.get(`https://hello-talk-webserver.vercel.app/levels`)
                .then((res) => {
                    setLevels(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
    }, []);

    return [levels, loading];
};

export default useOrderList;