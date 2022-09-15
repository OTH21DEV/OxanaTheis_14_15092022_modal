//import logo from './logo.svg';
//import './App.css';

import React, { useState } from "react";
import Modal from "./component/Modal/Modal";
import icon from "../src/assets/icon.svg";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return <Modal icon={icon} show={modalIsOpen}  setShow={setModalIsOpen} title={"Well done!"} text={"Employee was successfully created!"} />;
}

export default App;
