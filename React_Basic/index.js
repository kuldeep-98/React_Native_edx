import React from "react";
import ReactDOM from "react-dom";

import { StateExample } from "./StateExample";
import { App } from "./App";

const rootElement = document.getElementById("root");
let count = 0;
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<StateExample count={count} />*/}
  </React.StrictMode>,
  rootElement
);
