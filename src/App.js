import React, { useState } from "react";
import UserForm from "./components/Modules/UserForm";
import Display from "./Display";
import Form from "./Form";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [address, setAddress] = useState("");
  // const [isNameValid, setIsNameValid] = useState(true);
  // const [isEmailValid, setIsEmailValid] = useState(true);
  // const [isPhoneNoValid, setIsPhoneNoValid] = useState(true);
  // const [isAddressValid, setIsAddressValid] = useState(true);
  // const handleNameChange = (value) => {
  //   if (value) {
  //     setName(value);
  //     setIsNameValid(true);
  //   } else {
  //     setIsNameValid(false);
  //   }
  // };
  // const handleEmailChange = (value) => {
  //   var validRegex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (value && value.match(validRegex)) {
  //     setEmail(value);
  //     setIsEmailValid(true);
  //   } else {
  //     setIsEmailValid(false);
  //   }
  // };
  // const handlePhoneChange = (value) => {
  //   console.log(value.length, typeof value);
  //   if (value.length === 10 && Number(value)) {
  //     setIsPhoneNoValid(true);
  //     setPhoneNo(value);
  //   } else {
  //     setIsPhoneNoValid(false);
  //   }
  // };
  // const handleAddressChange = (value) => {
  //   if (value.length > 9) {
  //     setIsAddressValid(true);
  //     setAddress(value);
  //   } else {
  //     setIsAddressValid(false);
  //   }
  // };

  return (
    <div className="usersDisplay">
      {/* <Form
        fieldName1={"Name"}
        fieldName2={"Email"}
        setValue1={handleNameChange}
        setValue2={handleEmailChange}
        buttonStyles={{ backgroundColor: "red" }}
      />
      <Form
        fieldName1={"Phoneno"}
        fieldName2={"Address"}
        setValue1={handlePhoneChange}
        setValue2={handleAddressChange}
        buttonStyles={{ backgroundColor: "blue" }}
      />
      <Display
        name={name}
        isNameValid={isNameValid}
        email={email}
        isEmailValid={isEmailValid}
        phoneNo={phoneNo}
        isPhoneNoValid={isPhoneNoValid}
        address={address}
        isAddressValid={isAddressValid}
      /> */}
      <UserForm />
    </div>
  );
}

export default App;
