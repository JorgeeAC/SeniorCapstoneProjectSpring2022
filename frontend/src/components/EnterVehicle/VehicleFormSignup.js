import React from "react";
import useVehicleForm from "./useVehicleForm";
import validate from "./validateVehicleInfo";
import "../Form.css";

const VehicleFormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useVehicleForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Vehicle Information</h1>
        <h2>
          Please enter the following information for your personal vehicle
        </h2>
        <div className="form-inputs">
          <label htmlFor="make" className="form-label">
            Vehicle Make
          </label>
          <input
            id="make"
            type="text"
            className="form-input"
            name="make"
            placeholder="enter vehicle make"
            value={values.make}
            onChange={handleChange}
          />
          {errors.make && <p>{errors.make}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="model" className="form-label">
            Vehicle Model
          </label>
          <input
            id="model"
            type="text"
            className="form-input"
            name="model"
            placeholder="enter vehicle model"
            value={values.model}
            onChange={handleChange}
          />
          {errors.model && <p>{errors.model}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="year" className="form-label">
            Vehicle Year
          </label>
          <input
            id="year"
            type="text"
            className="form-input"
            name="year"
            placeholder="enter vehicle year"
            value={values.year}
            onChange={handleChange}
          />
          {errors.year && <p>{errors.year}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="last_oil_change" className="form-label">
            Vehicle's Last Oil Change
          </label>
          <input
            id="last_oil_change"
            type="date"
            className="form-input"
            name="last_oil_change"
            placeholder="enter date of vehicle's last oil change"
            value={values.last_oil_change}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="last_state_inspection" className="form-label">
            Vehicle's Last State Inspection
          </label>
          <input
            id="last_state_inspection"
            type="date"
            className="form-input"
            name="last_state_inspection"
            placeholder="enter date of vehicle's last state inspection"
            value={values.last_state_inspection}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="registration_number" className="form-label">
            Vehicle Registration Number
          </label>
          <input
            id="registration_number"
            type="text"
            className="form-input"
            name="registration_number"
            placeholder="enter vehicle's registration number"
            value={values.registration_number}
            onChange={handleChange}
          />
          {errors.registration_number && <p>{errors.registration_number}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default VehicleFormSignup;
