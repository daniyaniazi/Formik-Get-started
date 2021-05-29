import React from "react";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import ErrorMsg from "./ErrorMsg";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twiiter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
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
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={ErrorMsg} />
        </div>

        <div className="form-control">
          <label htmlFor="emial">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={ErrorMsg} />
        </div>

        <div className="form-control">
          <label htmlFor="Channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={ErrorMsg} />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field
            type="text"
            id="comments"
            name="comments"
            // as = component(deprecated)
            as="textarea"
            placeholder="Type your message here"
          />
          <ErrorMessage name="comments">
            {(erroMsg) => <div className="error">{erroMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {/* props */}
            {(props) => {
              const { field, form, meta } = props;
              //field: handle change, blur , name, value
              // Meta : touched, error?
              console.log("Rendering Props", props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name="address" component={ErrorMsg} />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field
            type="text"
            id="facebook"
            name="social.facebook"
            placeholder="facebook profile"
          />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter Profile</label>
          <Field
            type="text"
            id="facebook"
            name="social.twitter"
            placeholder="twitter profile"
          />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone Number</label>
          <Field
            type="text"
            id="primaryPh"
            name="phoneNumbers[0]"
            placeholder="Your primary phone number"
          />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Secondary Phone Number</label>
          <Field
            type="text"
            id="primaryPh"
            name="phoneNumbers[1]"
            placeholder="Your secondary phone number"
          />
        </div>

        <div className="form-control">
          <label htmlFor="phNumbers">List of Phone Numbers</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              console.log(fieldArrayProps);
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <div>
                  {phNumbers.map((phNumber, index) => {
                    return (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        )}

                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default Regform;
