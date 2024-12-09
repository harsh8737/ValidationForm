import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUpForm.module.css";


const SignUpForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), ], "Passwords must match")
          .required("Confirm password is required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert("Sign Up Successful");
          setSubmitting(false);
          resetForm();
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" aria-required="true" />
          <ErrorMessage name="email" component="div" className="error" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" aria-required="true" />
          <ErrorMessage name="password" component="div" className="error" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field name="confirmPassword" type="password" aria-required="true" />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error"
          />

          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
