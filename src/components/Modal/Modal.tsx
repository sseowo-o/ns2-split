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
    font-size: 2rem;
    line-height: 28px;
    text-align: center;
    position: relative;
    & input {
      border-bottom: 1px solid #757575;
      padding: 4px 0;
      text-align: center;
      width: 100%;
    }
    & .charCount {
      position: absolute;
      bottom: 4px;
      font-size: 1.2rem;
      right: 0;
    }
    & .errorMessage {
      font-size: 1.2rem;
      color: #ff2d2d;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
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
