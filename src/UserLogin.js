import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";

function UserLogin(props) {
  const initialValues = { username: "", age: "", email: "", pno: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (
      formValues.username !== "" &&
      formValues.email !== "" &&
      formValues.pno !== "" &&
      formValues.pno.length === 10
    ) {
      props.func(formValues);
      setFormValues(initialValues);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Name is required!";
    }else if(regex.test(values.username)){
      errors.username = "This is not valid format for Name";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.pno) {
      errors.pno = "Phone number  is required";
    } else if (values.pno.length < 10) {
      errors.pno = "Phone number must be of 10 characters";
    } else if (values.pno.length > 10) {
      errors.pno = "Phone number must be of 10 characters";
    }
    return errors;
  };

  const resetValue = () => {
    setFormValues("");
  };

  return (
    <form>
      <div></div>
      <div className="main_div">
        <div>
          <TextField
            id="outlined-basic"
            name="username"
            label="Name"
            variant="outlined"
            type="text"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>
        <div>
          <TextField
            id="outlined-basic"
            type="number"
            name="age"
            label="Age"
            variant="outlined"
            value={formValues.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <br />
          <TextField
            id="outlined-basic"
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div>
          <TextField
            id="outlined-basic"
            type="number"
            name="pno"
            label="Phone number"
            variant="outlined"
            value={formValues.pno}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.pno}</p>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          <button onClick={resetValue}> Reset</button>
        </Stack>
        
      </div>
    </form>
  );
}

export default UserLogin;
