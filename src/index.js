import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DeriveContextProvider } from "./context/DeriveContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DeriveContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DeriveContextProvider>
);
