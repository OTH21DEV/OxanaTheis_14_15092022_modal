import React, { useState } from "react";
import Modal from "../../src/lib/components/Modal";
import icon from "../assets/icon.svg";
import close_icon from "../assets/close.svg";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return <Modal icon={icon} closeIcon={close_icon} show={modalIsOpen} setShow={setModalIsOpen} title={"Well done!"} text={"Employee was successfully created!"} />;
}

export default App;
