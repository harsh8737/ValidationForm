import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm: React.FC = () => {
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      alert(`Remembered Email: ${rememberedEmail}`);
    }
  }, []);

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          if (values.rememberMe) {
            localStorage.setItem("rememberedEmail", values.email);
          }
          alert("Login Successful");
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

          <div>
            <Field name="rememberMe" type="checkbox" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
