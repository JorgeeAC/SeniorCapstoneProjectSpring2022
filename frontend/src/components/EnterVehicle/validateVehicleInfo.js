export default function validateVehicleInfo(values) {
  let errors = {};

  //First Name
  if (!values.make.trim()) {
    errors.make = "Vehicle make is required";
  }

  if (!values.model.trim()) {
    errors.model = "Vehicle model is required";
  }

  if (!values.year.trim()) {
    errors.year = "Vehicle year is required";
  }

  if (!values.registration_number.trim()) {
    errors.registration_number = "Vehicle registration number required";
  }

  return errors;
}
