import React, { useState } from "react";
import Modal from "../lib/components/Modal";
import icon from "../lib/assets/icon.svg";
import close_icon from "../lib/assets/close.svg";



function App() {


  const [modalIsOpen, setModalIsOpen] = useState(true);
  return <Modal icon={icon} closeIcon={close_icon} show={modalIsOpen} setShow={setModalIsOpen} title={"Well done!"} text={"Employee was successfully created!"}  />;
}

export default App;
