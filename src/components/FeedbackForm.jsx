import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormControl from "./FormControl";
import { useDispatch } from "react-redux";
import { addFeedback } from "../features/feedback/FeedbackSlice";
addFeedback;

const FeedbackForm = () => {
  const dispatch = useDispatch();
  let validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().required("Required").email("Invalid email format"),
    message: yup.string().required("Required"),
  });
  let initialState = {
    name: "",
    email: "",
    message: "",
  };
  let handleSubmit = (values, { resetForm }) => {
    console.log("values submitted ", values);
    dispatch(addFeedback(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(form) => {
        return (
          <Form className="formContainer">
            <FormControl name="name" label="Name" control="input" />
            <FormControl name="email" label="Email" control="input" />
            <FormControl name="message" label="Message" control="textarea" />
            <div>
              <button className="submitButton" type="submit">
                submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FeedbackForm;
