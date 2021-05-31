import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const radioOptions = [
    { key: "option 1", value: "option 1" },
    { key: "option 2", value: "option 2" },
  ];
  const checkbocOptions = [
    { key: "option 1", value: "option 1" },
    { key: "option 2", value: "option 2" },
  ];
  const dropDiwnoptions = [
    { key: "Select an option", value: "" },
    { key: "option 1", value: "option 1" },
    { key: "option 2", value: "option 2" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkbocOption: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOptions: Yup.string().required("Required"),
    checkbocOption: Yup.array().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  //render Props patterns
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        // this is function as children that auti atcially recive props i.e formik
        (formik) => (
          <Form className="form">
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl
              control="textarea"
              name="description"
              label="description"
            />

            <FormikControl
              control="select"
              options={dropDiwnoptions}
              name="selectOption"
              label="Select a topic"
            />

            <FormikControl
              control="radio"
              options={radioOptions}
              name="SelectRadio"
              label="Select a Option"
            />

            <FormikControl
              control="checkbox"
              options={checkbocOptions}
              name="checkOption"
              label="Select a Box"
            />

            <button type="submit">submit</button>
          </Form>
        )
      }
    </Formik>
  );
}

export default FormikContainer;
