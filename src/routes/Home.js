import React from "react";
import { dataFirst, dataTwo, dataThree } from "../components/Data";
import First from "../components/First";

function Home() {
  return (
    <div>
      <First {...dataFirst} />
      <First {...dataTwo} />
      <First {...dataThree} />
    </div>
  );
}

export default Home;
