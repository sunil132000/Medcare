import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </StrictMode>,
  rootElement
);
