import React from "react";
import { dataFirst, dataTwo, dataThree } from "../components/Data";
import First from "../components/First";
import Pricing from "../components/Pricing";

function Home() {
  return (
    <div>
      <First {...dataFirst} />
      <First {...dataTwo} />
      <First {...dataThree} />
      <Pricing />
    </div>
  );
}

export default Home;
