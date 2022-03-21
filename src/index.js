import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ToastProvider from "./store/context/ToastContext";
import ModalProvider from "./store/context/ModalContext";

ReactDOM.render(
  <ToastProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ToastProvider>,
  document.getElementById("root")
);
