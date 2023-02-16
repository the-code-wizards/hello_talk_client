import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import useSingleUser from './useSingleUser';

const PrivateRoute = ({ children }) => {
    const router = useRouter();
    const [user, error] = useAuthState(auth);
    //   const singleUser = useSingleUser();
    //   const userEmail = localStorage.getItem(email);
    //   console.log(singleUser);
    useEffect(() => {
        if (!user) {
            router.push('/signin');
        }
    }, []);
    return children;
};

export default PrivateRoute;