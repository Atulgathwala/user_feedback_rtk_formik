import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Input = (props) => {
  let { name, label, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} as="input" {...rest}></Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
