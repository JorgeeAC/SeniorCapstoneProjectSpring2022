import { useState, useEffect } from "react";
import UserAdapter from "../adapters/UserAdapter";
import UserSerializer from "../serializers/User";

const useCreateForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
    phoneNumber: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    userType: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    UserAdapter.createUser(UserSerializer.serializeUser(values))
      .then(response => response.json())
      .then(console.log)
      .catch(console.log)

      // TODO: Get a session key and store in localStorage.
      // Route to User's Page
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useCreateForm;
