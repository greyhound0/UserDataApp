import React from "react";
import Input from "../Input";

export default function Form({
  inputFields = [],
  submitButtonText = "Submit",
  submitOnClick = () => {},
}) {
  return (
    <form>
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
      <div
        style={{
          border: "1px solid #e5e5e5",
          padding: "6px 16px",
          borderRadius: "2px",
          width: "fit-content",
          cursor: "pointer",
        }}
        onClick={submitOnClick}
      >
        {submitButtonText}
      </div>
    </form>
  );
}
