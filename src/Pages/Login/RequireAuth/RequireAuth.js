import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.int';

const RequireAuth = ({childrem}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()

    // if(loading){
    //     return <h2>Loading.......</h2>
    // }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return childrem;
};

export default RequireAuth;