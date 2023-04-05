import React from "react";
import ImageProcessing from "../Image processing";
import Input from "../Input";
import "./style.css";

export default function Form({
  inputFields = [],
  submitButtonText = "Submit",
  submitOnClick = () => {},
}) {
  return (
    <form className="form">
      {inputFields.map((field, i) => (
        <Input
          label={field.label}
          onChange={field.onChange}
          placeholder={field.placeholder}
          type={field.type}
          value={field.value}
          errorMessage={field.errorMessage}
          key={i}
        />
      ))}

      <div className="submitButton" onClick={submitOnClick}>
        {submitButtonText}
      </div>
    </form>
  );
}
