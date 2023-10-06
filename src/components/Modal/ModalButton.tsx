import React from "react";
import { Button } from "../../components/Icon/Button";
import styled from "styled-components";

const ModalButtonStyle = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  margin-top: 32px;
`;

interface ModalButtonProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ onCancel, onConfirm }) => {
  return (
    <ModalButtonStyle>
      <Button type="button" className="cancle" onClick={onCancel}>
        취소
      </Button>
      <Button type="button" className="confirm" onClick={onConfirm}>
        분리하기
      </Button>
    </ModalButtonStyle>
  );
};

export default ModalButton;
