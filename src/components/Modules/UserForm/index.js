import React, { useEffect, useState } from "react";
import Form from "../../UIElements/Form";
import Profile from "../../UIElements/Profile";
import { emailRegex, mobileRegex } from "../../utils/constants";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNoValid, setIsPhoneNoValid] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const inputFields = [
    {
      type: "text",
      value: name,
      onChange: setName,
      placeholder: "Eg. Manas Gupta",
      label: "Name *",
      errorMessage: !isNameValid
        ? "Should have more than 3 characters"
        : undefined,
    },
    {
      type: "email",
      value: email,
      onChange: setEmail,
      placeholder: "Eg. greyhound@gmail.com",
      label: "Email *",
      errorMessage: !isEmailValid ? "Enter Valid Email" : undefined,
    },
    {
      type: "number",
      value: phoneNumber,
      onChange: setPhoneNumber,
      placeholder: "Eg. 8126196827",
      label: "Phone Number *",
      errorMessage: !isPhoneNoValid ? "Enter Valid Phone No." : undefined,
    },
  ];

  useEffect(() => {
    if (name.length > 3) setIsNameValid(true);
    else setIsNameValid(false);
  }, [name]);

  useEffect(() => {
    if (email.match(emailRegex)) {
      setIsEmailValid(true);
    } else setIsEmailValid(false);
  }, [email]);

  useEffect(() => {
    if (phoneNumber.match(mobileRegex)) {
      setIsPhoneNoValid(true);
    } else setIsPhoneNoValid(false);
  }, [phoneNumber]);

  const handleClick = () => {
    if (
      isNameValid &&
      isEmailValid &&
      isPhoneNoValid &&
      name &&
      email &&
      phoneNumber
    ) {
      //   alert("!");
      setShowProfile(true);
    }
  };

  //   1: submitOnClick = function{ STORE USER DATA IN AN ARRAY }
  //   2: Map Profile Component using UserArray
  //   3: Add Search Option based on Names in that list
  //   BONUS: add search support for all 3 keys in 1 search field

  return (
    <div>
      <Form inputFields={inputFields} submitOnClick={handleClick} />
      {showProfile ? (
        <Profile name={name} email={email} phoneNumber={phoneNumber} />
      ) : null}
    </div>
  );
}

export default UserForm;
