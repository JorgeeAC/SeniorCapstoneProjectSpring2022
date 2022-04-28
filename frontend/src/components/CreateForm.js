import React from "react";
import CreateFormSignup from "./CreateFormSignup";
import "./Form.css";

const CustForm = () => {
  return (
    <>
      <div className="form-container">
        <span className="menu-btn">
          <a href="https://www.w3schools.com/default.asp">Main Menu</a>
        </span>
        <CreateFormSignup />
      </div>
    </>
  );
};

export default CustForm;
