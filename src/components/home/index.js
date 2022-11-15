import React from "react";
import Header from "./header";
import Intro from "./intro";
import Works from "../works";
import Service from "../service/Service";
import Accordion from "../accordion/Accordion";
import Cards from "../cards/Cards";


function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Works />
      <Service />
      <Cards />
      <Accordion />
    </div>
  );
}

export default Home;
