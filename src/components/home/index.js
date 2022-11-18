import React from "react";
import Header from "./header";
import Intro from "./intro";
import Works from "../works";
import Service from "../service/Service";
import Accordion from "../accordion/Accordion";
import Cards from "../cards/Cards";
import Moving from "./../moving-services/Moving";
import Move from "../move";
import MoveSlider from "../moveSlider";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Works />
      <Service />
      <Cards />
      <Accordion />
      <MoveSlider />
      <Moving />
      <Move />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
