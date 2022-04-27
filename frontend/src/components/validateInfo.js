export default function validateInfo(values) {
  let errors = {};

  //First Name
  if (!values.firstName.trim()) {
    errors.firstName = "First name required";
  }

  //Last Name
  if (!values.lastName.trim()) {
    errors.lastName = "Last name required";
  }

  //Date of birth
  if (!values.dateOfBirth.trim()) {
    errors.dateOfBirth = "Date of birth required";
  }

  //Address
  if (!values.address.trim()) {
    errors.address = "Address required";
  }

  //Phone number
  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number required";
  }

  //Username
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  //Email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //Password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  //Password2
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 != values.password) {
    errors.password = "Passwords do not match";
  }

  //Accout Type
  if (!values.userType) {
    errors.userType = "Account selection required";
  }

  return errors;
}
