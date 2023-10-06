import React, { useEffect } from "react";
import styled from "styled-components";

const ModalStyle = styled.div`
  background: #fff;
  border-radius: 10px 10px 0 0;
  padding: 32px 24px;
  position: absolute;
  bottom: 0;
  width: 100%;

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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.background = "rgba(0, 0, 0, 0.7)";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.background = "initial";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.background = "initial";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalStyle>
      <div className="modal-content" style={{ width: "100%" }}>
        {children}
      </div>
    </ModalStyle>
  );
};

export default Modal;
