import React from "react";
import Tooltip from "../Tooltip";

export default function Profile({
  name,
  email,
  phoneNumber,
  index,
  source,
  primaryButtonAction,
  secondaryButtonAction,
  primaryActionImage,
  secondaryActionImage,
  primaryHoverText,
  secondaryHoverText,
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

      <Tooltip text={primaryHoverText}>
        <img
          style={{ height: "25px", width: "25px", cursor: "pointer" }}
          src={primaryActionImage}
          onClick={() => {
            primaryButtonAction(source, index);
          }}
        />
      </Tooltip>
      <Tooltip text={secondaryHoverText}>
        <img
          style={{ height: "25px", width: "25px", cursor: "pointer" }}
          src={secondaryActionImage}
          onClick={() => {
            secondaryButtonAction(source, index);
          }}
        />
      </Tooltip>

      {/* <img  
        onClick={() => {
          handleRemoveUser(index, source);
        }}
        style={{ cursor: "pointer" }}
      
        {source == "active" ? (
          " X"
        ) :                                                                                                               (
          <img
            title="move to inactive users"
            onClick={() => {
              moveToInactiveUsers(source, index);
            }}
            style={{ height: "25px", cursor: "pointer" }}
            src={inactiveUser}
            alt="inactive"
          />
        )}
      
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
      )} */}
    </div>
  );
}
