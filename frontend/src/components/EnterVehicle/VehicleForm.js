import React, { useState } from "react";
import VehicleFormSignup from "./VehicleFormSignup";
import "../Form.css";

export const VehicleForm = () => {
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
          <VehicleFormSignup submitForm={submitForm} />
        ) : (
          <VehicleFormSignup />
        )}
      </div>
    </>
  );
};
