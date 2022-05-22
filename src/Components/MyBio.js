import React from "react";
import { Link } from "react-router-dom";
import MybioCss from "./CSS/MyBio.module.css";
import "./DarkModeCss/MyBio.css";
import CvPdf from "./../pdf/Cv.pdf";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import PageviewIcon from '@mui/icons-material/Pageview';
import { useSelector } from "react-redux";

export default function MyBio() {
  const myState = useSelector((state) => state.darkmode);

  return (
    <div className={MybioCss.mDiv} data-aos="fade-up" id="myBio">
      
      
      <div className={MybioCss.dotsDiv}>
      <h1 className={MybioCss.myBioH1}>About</h1>
      </div>
      
      <div className={MybioCss.mybioText}>
        <div className={MybioCss.ResimgDiv}>
        <h1 className={MybioCss.myBioH1}>My Bio</h1>
        <p className={MybioCss.mBp}>
          Hi, I'm <b>Yash Maheshwari</b>, graduated in Information Technology by <b>Rajasthan Technical University, Kota.</b> I am currently working as <b>Application Developer </b> at <b>IBM</b>. I have 1+ year of work experience and i am proficient in writting efficient reusable components using <b>React</b> and <b>Redux</b>. I have implemented various pipelines for continous integration and deployment, used big data for managing data and sonarque for code inspection and security. I am open to learn new technologies with keen interest towards Frontend Technologies, Data Engineering, Cloud, Salesforce and achived various certifications for the same.
          
        </p>
        </div>
        </div>
        <div className={MybioCss.mybioText}>
        <div className={MybioCss.barDiv}>
          <p>HTML</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb1}></div>
            <div
              className={MybioCss.gbDivV}
              id={myState === true ? "darkgbDivV0" : ""}
            >
              92%
            </div>
          </div>
        </div>
        <div className={MybioCss.barDiv}>
          <p>CSS</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb2}></div>
            <div
              className={MybioCss.gbDivV}
              id={myState === true ? "darkgbDivV1" : ""}
            >
              90%
            </div>
          </div>
        </div>
        <div className={MybioCss.barDiv}>
          <p>React</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb3}></div>
            <div
              className={MybioCss.gbDivV}
              id={myState === true ? "darkgbDivV2" : ""}
            >
              93%
            </div>
          </div>
        </div>
        <div className={MybioCss.barDiv}>
          <p>JavaScript</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb4}></div>
            <div
              className={MybioCss.gbDivV}
              id={myState === true ? "darkgbDivV3" : ""}
            >
              91%
            </div>
          </div>
        </div>
        <div className={MybioCss.myBioBtnDiv}>
          <a href={CvPdf} download className={MybioCss.CvLink}>
            <p className={MybioCss.downloadtext}>Download CV</p>
            <p className={MybioCss.downloadIcon}>
              <CloudDownloadIcon />
            </p>
          </a>
          <a
            href="https://drive.google.com/file/d/1kC92VGsZLlshMjQgBxjI4KNOYqZZmunc/view?usp=sharing"
            target="_blank"
            className={MybioCss.CvLink}
          >
           <p className={MybioCss.downloadtext}>View CV</p>
            <p className={MybioCss.downloadIcon}>
              <PageviewIcon />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
