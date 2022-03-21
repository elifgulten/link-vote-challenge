import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Modal = (props) => {
  return (
    <div className="modal">
      <div>
        <div className="modal-title">
          <span className="close">Remove Link</span>
          <FontAwesomeIcon icon={faXmark} onClick={() => props.onCancel()} />
        </div>
        <div className="modal-content">
          <div dangerouslySetInnerHTML={{ __html: props.message }}></div>
          <div className="actions">
            <button onClick={() => props.onConfirm()}>Ok</button>
            <button onClick={() => props.onCancel()}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
