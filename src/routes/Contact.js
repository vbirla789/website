import React from "react";
import { dataThree } from "../components/Data";
import First from "../components/First";

function Contact() {
  return (
    <div>
      <First {...dataThree} />
    </div>
  );
}

export default Contact;
