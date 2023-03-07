import React, { useState } from "react";
import Modal from "react-modal";
import "./../../commonStyles/Commonstyles.css";

import { BallTriangle } from "react-loader-spinner";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backGroundColor: "transparent",
  },
};

const Loader = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="red"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </Modal>
    </div>
  );
};

export default Loader;
