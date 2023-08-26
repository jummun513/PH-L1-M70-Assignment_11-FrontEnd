import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { app } from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { MyContext } from '../../../App';

const auth = getAuth(app);

const RequireAuth = ({ children }) => {
    const { setDisplayUser } = useContext(MyContext);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    useEffect(() => {
        if (user) {
            setDisplayUser(user)
        }
    }, [user])

    if (loading) {
        return <div><Loading></Loading></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;