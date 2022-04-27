import React, { useState } from "react";
import CreateFormSignup from "./CreateFormSignup";
import CreateFormSuccess from "./CreateFormSuccess";
import "./Form.css";

const CustForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="menu-btn">
          <a href="https://www.w3schools.com/default.asp">Main Menu</a>
        </span>
        {!isSubmitted ? (
          <CreateFormSignup submitForm={submitForm} />
        ) : (
          <CreateFormSuccess />
        )}
      </div>
    </>
  );
};

export default CustForm;
