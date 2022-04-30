import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserAdapter from '../adapters/UserAdapter'; 
import CustomerPortal from './CustomerPortal';

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
        <>                                                { /**MechanicPortal**/ }
            { user ? user.user_type === 'C' ? <CustomerPortal /> : null : null }
        </>
    )
}

export default ProfilePage;