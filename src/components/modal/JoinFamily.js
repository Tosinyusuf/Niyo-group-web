import { Modal } from "antd";
import { useState } from "react";
import Join from "../home/JoinHome";

const JoinFamily = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

 

  return (
    <>
      <span type="primary" onClick={showModal}>
        Join the Niyo Family
      </span>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
            <Join />
      </Modal>

    </>
  );
};

export default JoinFamily;
