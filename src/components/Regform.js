import React from "react";

import {
  Form,
  Formik,
  ErrorMessage,
  Field,
  FieldArray,
  FastField,
} from "formik";
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
  comments: Yup.string().required("Required"),
  // comments: Yup.string().required("Required"), //-(2) Applying validation at field level
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
};

function Regform() {
  //takes an object
  //this hooks return an object that contain properties method

  return (
    //Wrapping upthe netire form in formik component
    //Pass props
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      //validate - func (1)
      onSubmit={onSubmit}
      // validateOnMount //on page load formik run validation against all field and erro object changes
      //Handle automatic validation
      // validateOnChang={false}
      // validateOnBlur={false}
    >
      {
        // function as childern it revice props retirn jsx
        (formik) => {
          console.log(formik);
          //IsValid = true when errors object is empty
          return (
            <Form>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <FastField type="text" id="name" name="name" />
                <ErrorMessage name="name" component={ErrorMsg} />
              </div>

              <div className="form-control">
                <label htmlFor="emial">Email</label>
                <FastField type="email" id="email" name="email" />
                <ErrorMessage name="email" component={ErrorMsg} />
              </div>

              <div className="form-control">
                <label htmlFor="Channel">Channel</label>
                <FastField type="text" id="channel" name="channel" />
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
                  validate={validateComments}
                />
                <ErrorMessage name="comments" comments={ErrorMsg} />
              </div>

              <div className="form-control">
                <label htmlFor="address">Address</label>
                <FastField name="address">
                  {/* props */}
                  {(props) => {
                    const { field, form, meta } = props;
                    //field: handle change, blur , name, value
                    // Meta : touched, error?

                    return (
                      <div>
                        <input type="text" id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </FastField>
                <ErrorMessage name="address" component={ErrorMsg} />
              </div>

              <div className="form-control">
                <label htmlFor="facebook">Facebook Profile</label>
                <FastField
                  type="text"
                  id="facebook"
                  name="social.facebook"
                  placeholder="facebook profile"
                />
              </div>

              <div className="form-control">
                <label htmlFor="twitter">Twitter Profile</label>
                <FastField
                  type="text"
                  id="facebook"
                  name="social.twitter"
                  placeholder="twitter profile"
                />
              </div>

              <div className="form-control">
                <label htmlFor="primaryPh">Primary Phone Number</label>
                <FastField
                  type="text"
                  id="primaryPh"
                  name="phoneNumbers[0]"
                  placeholder="Your primary phone number"
                />
              </div>

              <div className="form-control">
                <label htmlFor="primaryPh">Secondary Phone Number</label>
                <FastField
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
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    //Access errors
                    //VALIDATION RUNS
                    //After any blur event in the form
                    //After evry change event in a form
                    //at Form submission - on every submit w/o inputs (as onChange did not work but still fotmik maintain errors)
                    console.log("Form Errors", form.errors);
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => {
                          return (
                            <div key={index}>
                              <Field name={`phNumbers[${index}]`} />
                              {index > 0 && (
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                >
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
              <button type="submit" onClick={() => formik.validateField}>
                Validate comments
              </button>
              <button type="submit" onClick={() => formik.validateForm}>
                Validate all
              </button>
              <button
                type="submit"
                onClick={() => formik.setFieldTouched("comments")}
              >
                Visit comments
              </button>
              <button
                type="submit"
                onClick={() =>
                  formik.setTouched({ name: true, channel: true, email: true })
                }
              >
                Visit all
              </button>
              <button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Submit
              </button>
            </Form>
          );
        }
      }
    </Formik>
  );
}

export default Regform;
