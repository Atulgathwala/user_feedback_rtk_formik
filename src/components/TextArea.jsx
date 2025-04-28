import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const TextArea = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} as="textarea" {...rest}></Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
