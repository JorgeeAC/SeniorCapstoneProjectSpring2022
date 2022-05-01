import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserAdapter from '../adapters/UserAdapter'; 
import CustomerPortal from './CustomerPortal';
import MechanicPortal from './MechanicPortal/MechanicPageContent';

const ProfilePage = () => {
    const [ user, setUser ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        UserAdapter.getLoggedInUser()
        .then(resp => resp.json())
        .then((resp) => {
            if(resp.username) setUser(resp);
            else navigate('/signup');
        }) 
        .catch(console.error);
    }, [])

    return (
        <>                                                
            { user && user.user_type === 'C' ? <CustomerPortal /> : <MechanicPortal  user={user}/> }
        </>
    )
}

export default ProfilePage;