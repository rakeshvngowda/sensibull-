import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DeriveContextProvider } from "./context/DeriveContext";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <DeriveContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DeriveContextProvider>
  </Provider>
);
