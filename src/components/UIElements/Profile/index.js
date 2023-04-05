import React, { useState } from "react";
import Tooltip from "../Tooltip";
import "./style.css";

export default function Profile({
  name,
  email,
  phoneNumber,
  index,
  source,
  image,
  primaryButtonAction,
  secondaryButtonAction,
  primaryActionImage,
  secondaryActionImage,
  primaryHoverText,
  secondaryHoverText,
}) {
  let firstName = name?.split("")[0]?.toUpperCase();
  const [randomColor, setRandomColor] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );

  return (
    <div className="profile" draggable>
      <div>
        {image ? (
          <img src={image} className="image" />
        ) : (
          <div
            style={{
              backgroundColor: randomColor,
              width: "25px",
              height: "25px",
              borderRadius: "20px",
              textAlign: "center",
              padding: "5px",
              fontWeight: "bold",
            }}
          >
            {firstName}
          </div>
        )}
        <div>
          <label className="label">Name:</label>
          {" " + name}
        </div>
        <div>
          <label className="label">Email:</label>
          {" " + email}
        </div>
        <div>
          <label className="label">Phone:</label>
          {" " + phoneNumber}
        </div>
      </div>

      <Tooltip text={primaryHoverText}>
        <div style={{ width: "70px", paddingLeft: "33px" }}>
          <img
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
            src={primaryActionImage}
            onClick={() => {
              primaryButtonAction(source, index);
            }}
          />
        </div>
      </Tooltip>
      <Tooltip text={secondaryHoverText}>
        <div style={{ width: "70px", paddingLeft: "33px" }}>
          <img
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
            src={secondaryActionImage}
            onClick={() => {
              secondaryButtonAction(source, index);
            }}
          />
        </div>
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
