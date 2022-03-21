import React, { useState, createContext, useContext } from "react";
import Modal from "../../components/Modal";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [state, setState] = useState({
    show: false,
    message: "",
    callback: null,
  });

  const showModal = (message, callback) => {
    setState({
      show: true,
      message,
      callback,
    });
  };

  return (
    <ModalContext.Provider value={{ showModal }}>
      {state.show && (
        <Modal
          message={state.message}
          onConfirm={() => {
            setState({
              show: false,
              message: "",
              callback: null,
            });

            state.callback();
          }}
          onCancel={() =>
            setState({
              show: false,
              message: "",
              callback: null,
            })
          }
        />
      )}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => useContext(ModalContext);
