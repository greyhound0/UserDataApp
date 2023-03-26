import React from "react";

export default function Input({
  type = "text",
  value = "",
  onChange = () => {},
  placeholder = "Enter some text",
  label = "",
  errorMessage = "",
}) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {errorMessage ? (
        <p
          style={{ color: "red", fontSize: "10px", margin: "0", padding: "0" }}
        >
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
