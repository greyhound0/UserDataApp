import React, { useState } from "react";
import "./style.css";

export default function Tooltip({ text, children }) {
  const [hoverText, sethoverText] = useState(false);
  return (
    <div
      className="tooltip"
      onMouseEnter={() => {
        sethoverText(true);
      }}
      onMouseLeave={() => {
        sethoverText(false);
      }}
    >
      {children}
      {hoverText ? <span className="hoverText">{text}</span> : null}
    </div>
  );
}
