import React from "react";
import { useFormik } from "formik";

function Regform() {
  //takes an object
  //this hooks return an object that contain properties method
  const formik = useFormik({
    //STEP 1
    //object that contain initial values for our form state
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    //STEP 2
    // chnage handler
  });

  console.log("FORM VALUES", formik.values);
  return (
    <div>
      <form>
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
          id="Channel"
          name="Channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Regform;
