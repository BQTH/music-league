import React from "react";

function StartSession() {
    console.log('Session started')
}

//start sessions button used to fire a function in the backend
const StartSessionBtn = () => {
  return (
      <div className="StartBtn" onClick={StartSession()}>
        <h3>START SESSION</h3>
      </div>
  );
};

export default StartSessionBtn;
