import React from "react";
import useCustForm from "./useCreateForm";
import validate from "./validateInfo";
import "./Form.css";

const CreateFormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useCustForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Welcome to Wrench</h1>
        <h2>
          Get started with us today! Create your account by filling out the
          information below
        </h2>
        <fieldset className="user-type-field">
          <legend>Select Account Type</legend>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="userType"
                value="Customer"
                onChange={handleChange}
              />
              <span>Customer</span>
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="userType"
                value="Mechanic"
                onChange={handleChange}
              />
              <span>Mechanic</span>
            </label>
          </div>
        </fieldset>
        {errors.userType && <p>{errors.userType}</p>}
        <div className="form-inputs">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className="form-input"
            name="firstName"
            placeholder="enter your first name"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className="form-input"
            name="lastName"
            placeholder="enter your last name"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth (DOB)
          </label>
          <input
            id="dateOfBirth"
            type="date"
            className="form-input"
            name="dateOfBirth"
            placeholder="enter your date of birth"
            value={values.dateOfBirth}
            onChange={handleChange}
          />
          {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            id="address"
            type="text"
            className="form-input"
            name="address"
            placeholder="enter your address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            className="form-input"
            name="phoneNumber"
            placeholder="enter your phone number"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="form-input"
            name="username"
            placeholder="enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            name="email"
            placeholder="enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            name="password"
            placeholder="enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            className="form-input"
            name="password2"
            placeholder="re-enter password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Next
        </button>
        <span className="form-input-login">
          Already have and account?{" "}
          <a href="/">Sign In</a>
        </span>
      </form>
    </div>
  );
};

export default CreateFormSignup;
