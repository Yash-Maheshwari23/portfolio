import React from "react";
import SerCss from "./CSS/Services.module.css";
import ComputerIcon from "@material-ui/icons/Computer";

export default function Services() {
  return (
    <div className={SerCss.mDiv} id="Services" data-aos="fade-up">
      <h1> Services </h1>{" "}
      <div className={SerCss.conDiv}>
        <div className={SerCss.fullS}>
          <ComputerIcon fontSize="large" />
          <div className={SerCss.detSer}>
            <p className={SerCss.title}> Web Developement </p> <p> React </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
