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

import React, { useEffect } from "react";

function App() {
  return (
    <div className="container mx-auto">
      {/* <Award /> */}
      <Navbar />
      <div className="pt-[8rem] pb-[6rem]">
        <Award />
      </div>
      <Animation />

      <Logos />
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
  );
}

export default App;
