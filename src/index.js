import React from "react";
import { render } from "react-dom";
import "./index.scss";
import Root from "./Root";
import registerServiceWorker from "./registerServiceWorker";

render(<Root />, document.getElementById("root"));
registerServiceWorker();
