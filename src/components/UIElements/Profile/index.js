import React from "react";

export default function Profile({ name, email, phoneNumber }) {
  return (
    <div>
      <div>
        <label>Name:</label>
        {name}
      </div>
      <div>
        <label>Email:</label>
        {email}
      </div>
      <div>
        <label>PhoneNumber:</label>
        {phoneNumber}
      </div>
    </div>
  );
}
