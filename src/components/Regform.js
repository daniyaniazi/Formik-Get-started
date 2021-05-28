import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("FORM VALUES", values);
};

const validation = (values) => {
  // errors key correspond to name attribute of form
  // values of key is a string inidicating the error message
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid Format";
  }
  if (!values.channel) {
    errors.namchannele = "Required";
  }
  return errors;
};

function Regform() {
  //takes an object
  //this hooks return an object that contain properties method
  const formik = useFormik({
    //STEP 1
    //object that contain initial values for our form state
    initialValues: { initialValues },
    //STEP 2
    // chnage handler

    //STEP 3 submit handler
    onSubmit: onSubmit,
    // it automatically recieved a values
    validate: validation,
  });

  //   console.log("FORM VALUES", formik.values);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="emial">Email</label>
        <input
          type="email"
          id="emial"
          name="emial"
          onChange={formik.handleChange}
          value={formik.values.emial}
        />

        <label htmlFor="Channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Regform;
