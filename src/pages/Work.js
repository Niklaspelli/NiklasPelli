import React, { useState } from "react";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup} className="--btn --btn -primary">
        Toggle Popup
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>This is a simple popup!</h2>
            <p>Hej hej monika hej hej</p>
            <button onClick={togglePopup} className="--btn --btn -primary">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;

/* export default function Work() {
  return (
    <main className="Work">
      <h2>My work</h2>
      <p style={{ marginTop: "1rem" }}>Här ska det stå nåt.</p>
    </main>
  );
} */
