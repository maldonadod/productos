import React from "react";
import App from "./App";

function main(renderer, productos) {
  renderer.render(<App productos={productos} />)
}

export default main;