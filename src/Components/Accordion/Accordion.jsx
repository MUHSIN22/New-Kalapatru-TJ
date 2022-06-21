import React, { useState } from "react";
import "./Accordion.css";
// import { AddCircle, RemoveCircle } from "@mui/icons-material";
export default function Accordion({ title, children }) {
  const [ShowTarget, setShowTarget] = useState(false);
  return (
    <div className="Accordion-Container">
      <div className="Accordion-Dropdown">
        <div className="Accordion-Trigger">
          <h3>{title}</h3>
          <button className="A-Trigger">
            {ShowTarget ? (
              <h1 onClick={() => setShowTarget(false)}>-</h1>
              // <RemoveCircle onClick={() => setShowTarget(false)} />
            ) : (
              <h1 onClick={() => setShowTarget(true)}>+</h1>
              // <AddCircle onClick={() => setShowTarget(true)} />
            )}
          </button>
        </div>
        {ShowTarget && (
          <div className="Accordion-Target">
            <img
              src="/images/PrivacyPolicy-Cup1.png"
              alt=""
              className="Accordion-Upper-Cup"
            />
            {children}
            <img
              src="/images/PrivacyPolicy-Cup2.png"
              alt=""
              className="Accordion-Bottom-Cup"
            />
          </div>
        )}
      </div>
    </div>
  );
}

