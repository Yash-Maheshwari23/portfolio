import React from "react";
import "./CSS/Footer.css";
import { useSelector } from "react-redux";

export default function Footer() {
  const myState = useSelector((state) => state.darkmode);

  return (
    <div className={myState === true ? "darkmDiv" : "mDiv"}>
      <p>Made by Yash Maheshwari</p>
    </div>
  );
}
