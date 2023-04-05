import React from "react";
import "./style.css";

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
      <label className="label">{label}</label>
      <input
        className="input"
        type={type}
        value={value}
        onChange={(e) =>
          onChange(type == "file" ? e.target.files[0] : e.target.value)
        }
        placeholder={placeholder}
      />

      {errorMessage ? (
        <p
          style={{
            color: "rgb(217,17,0)",
            fontSize: "12px",
            fontWeight: "bold",
            margin: "0",
            padding: "0",
          }}
        >
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
