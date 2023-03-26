import React, { useState } from "react";
import Error from "./Error";

export default function Form({
  fieldName1,
  fieldName2,
  buttonStyles,
  setValue1,
  setValue2,
}) {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const displayData = () => {
    setValue1?.(field1);
    setValue2?.(field2);
  };
  const handleChange = (e) => {
    setField1(e.target.value);
  };

  const handleChange2 = (e) => {
    setField2(e.target.value);
  };

  return (
    <div className="form">
      {fieldName1 ? (
        <input
          className="input"
          onChange={handleChange}
          placeholder={fieldName1}
        />
      ) : null}
      {fieldName2 ? (
        <input
          className="input"
          value={field2}
          onChange={handleChange2}
          placeholder={fieldName2}
        />
      ) : null}
      <button style={buttonStyles} onClick={displayData}>
        Submit
      </button>
    </div>
  );
}
