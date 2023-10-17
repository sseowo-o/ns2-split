import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  &.open {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ModalStyle = styled.div`
  background: #fff;
  border-radius: 10px 10px 0 0;
  padding: 32px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  & h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
  }
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    transform: isOpen ? "translateY(0)" : "translateY(100%)",
  };

  const handleModalClick = (e: React.MouseEvent) => {
    // 배경 클릭 시 모달을 닫도록
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer
      className={`modal ${isOpen ? "open" : ""}`}
      onClick={handleModalClick} // 배경 클릭 시 닫히도록
    >
      <ModalStyle style={modalStyle}>
        <div className="modal-content" style={{ width: "100%" }}>
          {children}
        </div>
      </ModalStyle>
    </ModalContainer>
  );
};

export default Modal;
