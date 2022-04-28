import { useState } from "react";
import UserAdapter from "../adapters/UserAdapter";
import UserSerializer from "../serializers/User";
import { useNavigate } from "react-router-dom";

const useCreateForm = (callback, validate) => {

  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const localErrors = validate(values);
    setErrors(localErrors);

    if (Object.keys(localErrors).length === 0){
      UserAdapter.createUser(UserSerializer.serializeUser(values))
        .then(response => response.json())
        .then(response => {
            localStorage.setItem('user_id', response.user_id);
            navigate(`/profile`);
        }).catch(console.log)
      }
  };


  return { handleChange, values, handleSubmit, errors };
};

export default useCreateForm;
