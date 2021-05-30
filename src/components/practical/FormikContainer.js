import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";

function FormikContainer() {
  const initialValues = {};
  const validationSchema = Yup.object({});

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
          <Form>
            <button type="submit">submit</button>
          </Form>
        )
      }
    </Formik>
  );
}

export default FormikContainer;
