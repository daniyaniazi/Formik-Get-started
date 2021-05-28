import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("FORM VALUES", values);
};
// Yup shcema validation
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

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
    // validate: validation, //commenting for Yup schema validaton
    validationSchema,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps("name")}
        />
        {/* Only display error messages when the field is visited and have error messgae */}
        {formik.errors.name && formik.touched.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="emial">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="Channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          {...formik.getFieldProps("channel")}
        />
        {formik.errors.channel && formik.touched.channel ? (
          <div>{formik.errors.channel}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Regform;
