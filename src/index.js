import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
// Call make Server
makeServer();

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);
