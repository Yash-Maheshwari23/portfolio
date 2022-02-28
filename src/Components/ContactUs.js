import React from "react";
import "./DarkModeCss/Contact.css";
import { Link } from "react-router-dom";
import CuCss from "./CSS/ContactUs.module.css";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useSelector } from "react-redux";

export default function ContactUs() {
  const myState = useSelector((state) => state.darkmode);

  return (
    <div className={CuCss.mDiv} id="ContactUs" data-aos="fade-up">
      <h1> Contact </h1>
      <div className={CuCss.slideDiv}>
        <div className={CuCss.infoDiv}>
          <div className={CuCss.iconsDiv}>
            <CallIcon />
            <p> +91 8078663773 </p>
          </div>
          <div className={CuCss.iconsDiv}>
            <MailIcon />
            <p> ymaheshwari23@gmail.com </p>
          </div>
          <div className={CuCss.iconsDiv0}>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/yash-maheshwari-49b662177/",
              }}
              target="_blank"
            >
              <LinkedInIcon fontSize="large" className={CuCss.iconsDivI0} />
            </Link>
            <Link
              to={{
                pathname: "https://github.com/Yash-Maheshwari23",
              }}
              target="_blank"
            >
              <GitHubIcon
                fontSize="large"
                className={CuCss.iconsDivI1}
                id={myState === true ? "darkGitHubIcon" : ""}
              />
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
