import React, { useCallback, useEffect } from "react";
import "./style.css";

const Modal = ({ icon, closeIcon, show, setShow, title, text }) => {

  const handleKeydown = useCallback((e) => {
    if (e.type === "click" || e.key === "Escape" || e.key === "Enter") {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    show && (
      <>
        <div className="wrapper-modal">
          <div className="modal">
            <div className="modal-icon">
              <img src={icon} alt="" />
            </div>
            <img className="modal-close-icon" src={closeIcon} alt="" onKeyPress={(e) => handleKeydown(e)} onClick={(e) => handleKeydown(e)}></img>
            <h1 className="modal__title">{title}</h1>
            <p className="modal__text">{text}</p>
            <div className="wrapper-btn">
              <button type="button" className="btn" onClick={(e) => handleKeydown(e)}>
                OK{" "}
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;
