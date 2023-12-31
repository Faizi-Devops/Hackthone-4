import logo from "./logo.svg";
import "./App.css";
import Award from "./components/Award";
import Logos from "./components/Logos";
import Harness from "./components/Harness";
import Card from "./components/Card";
import Team from "./components/Team";
import Shopping from "./components/Shopping";
import Tellus from "./components/Tellus";
import Footer from "./components/Footer";
import Navbarback from "./navbarback";
import Navbar from "./components/Header/Navbar";
import Animation from "./components/Animation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({
      // Global settings and options can be configured here
      duration: 800, // Duration of animations (in milliseconds)
      easing: 'ease-in-out', // Type of easing for animations
      // Additional global settings...
    });
  }, []);
  return (
    <div>
    <div className="container mx-auto lg:px-[1rem]">
      <ToastContainer />
      {/* <Award /> */}
      <Navbar />
      <div className="pt-[8rem] pb-[6rem]">
        <Award />
      </div>
      <Animation />

     
      
    </div>
    <Logos />
    <div className="container mx-auto">
    <Harness />
      <Card />
      <Team />
      <Shopping />
      <div className="pt-[4rem]">
        <Tellus />
      </div>

      <div className="pt-[4rem]">
        <Footer />
        <Navbarback />
      </div>
      </div>
    </div>
  );
}

export default App;
