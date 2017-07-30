export default function Validate(data) {
	console.log(data);
	let errors = {};
  if (data.username === "") {
  	errors.username = "This field is required";
  }
  if (data.password === "") {
  	errors.password = "This field is required";
  }
  if (data.confirmPassword === "") {
  	errors.confirmPassword = "This field is required";
  }
  if (data.email === "") {
  	errors.email = "This field is required";
  }
  return errors;
}