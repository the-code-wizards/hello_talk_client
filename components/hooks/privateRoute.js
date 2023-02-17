import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useSingleUser from './useSingleUser';

const PrivateRoute = ({children}) => {
    const [user, error] = useAuthState(auth);
    const [singleUser] = useSingleUser();

    if (!singleUser.email || user.email) {
        return window.location.href = '/signin';
    }
    return {children}
};

export default PrivateRoute;