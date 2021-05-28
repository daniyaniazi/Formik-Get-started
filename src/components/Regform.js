import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
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

  return (
    //Wrapping upthe netire form in formik component
    //Pass props
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />
        <label htmlFor="emial">Email</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" />
        <label htmlFor="Channel">Channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" />
        <label htmlFor="comments">Comments</label>

        <Field
          type="text"
          id="comments"
          name="comments"
          // as = component(deprecated)
          as="textarea"
          placeholder="Type your message here"
        />

        <Field name="address">
          {/* props */}
          {(props) => {
            const { field, form, meta } = props;
            //field: handle change, blur , name, value
            // Meta : touched, error?
            console.log("Rendering Props", props);
            return (
              <div>
                <input type="text" id="address" {...field} />;
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            );
          }}
        </Field>
        <ErrorMessage name="channel" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default Regform;
