import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
