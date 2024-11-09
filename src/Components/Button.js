import React from "react";
import "../Components/Button.css";

function Button({ theTitle, children }) {
  return (
    <div className="tag">
      <div className="TheTitle">
        <span>{theTitle}</span>
        {children}
      </div>
    </div>
  );
}

export default Button;
