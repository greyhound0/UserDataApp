import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display";

export default function App2() {
  const [nameData, setNameData] = useState([]);

  const addName = (name) => {
    let temp = [...nameData];
    if (name?.length > 3) {
      temp.push(name);
    }
    setNameData([...temp]);
  };

  return (
    <div>
      <Form fieldName1={"Enter Name"} setValue1={addName} />
      {nameData.map((name, i) => (
        <Display name={name} key={i} isNameValid={name} />
      ))}
    </div>
  );
}
