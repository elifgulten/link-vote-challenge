import React, { useState, createContext, useContext } from "react";
import Toast from "../../components/Toast";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [state, setState] = useState(null);

  const showToast = (type, message) => {
    setState({
      type,
      message,
    });

    setTimeout(function () {
      setState(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {state && <Toast type={state.type} message={state.message} />}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;

export const useToast = () => useContext(ToastContext);
