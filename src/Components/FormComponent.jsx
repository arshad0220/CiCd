import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const FormComponent = () => (
  <Formik
    initialValues={{ firstname: '', lastname: '', email: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {() => (
      <Form>
        <div>
          <label htmlFor="firstname">First Name</label>
          <Field name="firstname" type="text" />
          <ErrorMessage name="firstname" component="div" />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <Field name="lastname" type="text" />
          <ErrorMessage name="lastname" component="div" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default FormComponent;
