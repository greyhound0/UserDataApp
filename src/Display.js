import React from "react";
import Error from "./Error";

export default function Display({
  name,
  email,
  address,
  phoneNo,
  isNameValid,
  isPhoneNoValid,
  isEmailValid,
  isAddressValid,
}) {
  return (
    <div>
      <div>{name}</div>
      {!isNameValid ? <Error message={"Field cannot be empty"} /> : null}
      {/* <div>{email}</div>
      {!isEmailValid ? <Error message={"Invalid Email"} /> : null}
      <div>{address}</div>
      {!isAddressValid ? <Error message={"Invalid Address"} /> : null}
      <div>{phoneNo}</div>
      {!isPhoneNoValid ? <Error message={"Invalid Phone No."} /> : null} */}
    </div>
  );
}
