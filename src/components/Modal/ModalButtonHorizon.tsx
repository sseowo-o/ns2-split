import React from "react";
import { Button } from "../Icon/Button";
import styled from "styled-components";

const ModalButtonHorizonStyle = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  margin-top: 32px;
`;

interface ModalButtonHorizonProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const ModalButtonHorizon: React.FC<ModalButtonHorizonProps> = ({
  onCancel,
  onConfirm,
}) => {
  return (
    <ModalButtonHorizonStyle>
      <Button type="button" className="cancel" onClick={onCancel}>
        취소
      </Button>
      <Button type="button" className="confirm" onClick={onConfirm}>
        분리하기
      </Button>
    </ModalButtonHorizonStyle>
  );
};

export default ModalButtonHorizon;
