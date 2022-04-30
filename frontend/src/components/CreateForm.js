import React, { useEffect } from "react";
import CreateFormSignup from "./CreateFormSignup";
import UserAdapter from "../adapters/UserAdapter";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const CustForm = () => {

  const navigate = useNavigate();

  useEffect(() => {
    UserAdapter.getLoggedInUser()
    .then(json => json.json())
    .then(resp => { 
      if(resp.username)
        navigate('/profile');
     })
    .catch(console.error)
  }, [])

  return (
    <>
      <div className="form-container">
        <span className="menu-btn">
          <a href="/">Main Menu</a>
        </span>
        <CreateFormSignup />
      </div>
    </>
  );
};

export default CustForm;
