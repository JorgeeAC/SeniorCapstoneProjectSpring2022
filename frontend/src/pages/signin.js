import React, { useState, useEffect } from 'react';
import SignIn from '../components/Signin';
import { useNavigate } from 'react-router-dom';
import UserAdapter from '../adapters/UserAdapter';
import JWTHandler from "../shared/JwtHandler";

const SigninPage = () => {

  const navigate = useNavigate();
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ credentials, setCredentials ] = useState({email: '', password: ''});


  const onChange = ({ target: { type, value } }) => {
    setCredentials({...credentials, [type]: value});
  };

  useEffect(() => {
    UserAdapter.getLoggedInUser()
    .then(json => json.json())
    .then(resp => { 
      if(resp.username)
        navigate('/profile')
     })
    .catch(console.error)
  }, [])
  
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    UserAdapter.logIn(credentials)
    .then(resp => resp.json())
    .then(resp => { 
      JWTHandler.storeJwtToken(resp);
      navigate(`/profile`);
     })
    .catch(() => setErrorMessage("Invalid Credentials"))
  }




  return (
    <>
        <SignIn handleSubmit={handleLogin} errorMessage={errorMessage} onChange={onChange} />
    </>
  )
}

export default SigninPage
