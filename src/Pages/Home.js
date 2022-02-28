import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./CSS/Home.css";
import Nav from "./../Components/Nav";
import Header from "./../Components/Header";
import MyBio from "./../Components/MyBio";
import Portfolio from "./../Components/Portfolio";
import Services from "./../Components/Services";
import ContactUs from "./../Components/ContactUs";
import Footer from "./../Components/Footer";
import { useSelector } from "react-redux";

export default function Home() {
  const myState = useSelector((state) => state.darkmode);

  useEffect(() => {
    Aos.init({ offset: 180, duration: 1000 });
  }, []);
  return (
    <div id={myState === true ? "darkHome" : ""}>
      <Nav />
      <Header />
      <MyBio />
      <Portfolio />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}
