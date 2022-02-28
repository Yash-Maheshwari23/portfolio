import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavRes from "./../NavRes";
import NavCss from "./../CSS/Nav.module.css";
import "./../CSS/NavRes.css";

export default function Nav() {
  const [show, setShow] = useState(true);
  const [nav, setnav] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 1) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  // const changeNav = () => {
  //   if (
  //     window.scrollY >= 598.6666870117188 &&
  //     window.scrollY <= 2300.666748046875
  //   ) {
  //     // console.log(document.getElementById("ulS"));
  //     // document.getElementById("ulS").forEach;
  //   }
  // };

  window.addEventListener("scroll", changeBg);
  // window.addEventListener("scroll", changeNav);

  return (
    <div className={NavCss.mDiv} id={nav ? "active" : "hello"}>
      <ul className={NavCss.ul}>
        <li className={NavCss.li}>
          <Link to="/" className={NavCss.linkNav} id="activeHome">
            Home{" "}
          </Link>{" "}
        </li>{" "}
        <li className={NavCss.li}>
          <Link to="/" className={NavCss.linkNav} id="activeAbout">
            About{" "}
          </Link>{" "}
        </li>{" "}
        <li className={NavCss.li}>
          <Link to="/" className={NavCss.linkNav} id="activePort">
            Protfolio{" "}
          </Link>{" "}
        </li>{" "}
        <li className={NavCss.li}>
          <Link to="/" className={NavCss.linkNav} id="activeService">
            Services{" "}
          </Link>{" "}
        </li>{" "}
        <li className={NavCss.li}>
          <Link to="/" className={NavCss.linkNav} id="activeConctact">
            Contact Us{" "}
          </Link>{" "}
        </li>{" "}
      </ul>{" "}
      <div className={NavCss.burger} onClick={() => setShow(!show)}>
        <div> </div> <div> </div> <div> </div>{" "}
      </div>{" "}
      <div id={show ? "s1" : "s2"}>
        <NavRes />
      </div>{" "}
    </div>
  );
}
