import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/aboutus";
import Classes from "./components/Classes";
import Schedule from "./components/Schedule";
import Whywellnex from "./components/whywellnex";
import ComingSoon from "./components/comingsoon";
import Testimonials from "./components/Testimonal";
import Apps from "./components/apps";
import StayConnected from "./components/stayconect";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Apps />
      <Classes />
      <Schedule />
      <Testimonials />
      <ComingSoon />
      <Whywellnex />
      <StayConnected />
      <Footer />
    </>
  );
}

export default App;
