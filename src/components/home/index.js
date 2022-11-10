import React from "react";
import Header from "./header";
import Intro from "./intro";
import Works from "../works";
import Service from "../service/Service";

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Works />
      <Service />
    </div>
  );
}

export default Home;
