import React from "react";
import inactiveUser from "../../../Images/lethargic.png";
import activeUser from "../../../Images/active-user.png";

export default function Profile({
  name,
  email,
  phoneNumber,
  handleRemoveUser,
  index,
  source,
  moveToInactiveUsers,
  moveToActiveUsers,
}) {
  return (
    <div style={{ display: "flex" }}>
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
      <h2
        title="move to removed users"
        onClick={() => {
          handleRemoveUser(index, source);
        }}
        style={{ cursor: "pointer" }}
      >
        &#x2716;
      </h2>
      {source == "active" ? (
        <img
          title="move to inactive users"
          onClick={() => {
            moveToInactiveUsers(source, index);
          }}
          style={{ height: "25px", cursor: "pointer" }}
          src={inactiveUser}
          alt="inactive"
        />
      ) : (
        <img
          title="move to active users"
          onClick={() => {
            moveToActiveUsers(source, index);
          }}
          style={{ height: "25px", cursor: "pointer" }}
          src={activeUser}
          alt="inactive"
        />
      )}
    </div>
  );
}
