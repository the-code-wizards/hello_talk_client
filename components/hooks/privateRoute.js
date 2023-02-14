import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PrivateRoute = () => {
    const [user, error] = useAuthState(auth);
    if (!user) {
        window.location.href = '/signin';
    }
};

export default PrivateRoute;
