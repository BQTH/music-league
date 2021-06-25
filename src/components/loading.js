import React from "react";
import loading from "../assets/loading.svg";

//Shows a loader screen when needed.
const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
