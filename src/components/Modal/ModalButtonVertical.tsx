import React from "react";
import { Button } from "../Icon/Button";
import styled from "styled-components";

const ModalButtonVerticalStyle = styled.div`
  width: 100%;
  margin-top: 32px;
  & button {
    margin: 4px 0;
  }
`;

interface ModalButtonVerticalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const ModalButtonVertical: React.FC<ModalButtonVerticalProps> = ({
  onCancel,
  onConfirm,
}) => {
  return (
    <ModalButtonVerticalStyle>
      <Button type="button" className="confirm" /* onClick={onConfirm} */>
        일괄 분리하기
      </Button>
      <Button type="button" className="cancle" onClick={onConfirm}>
        현재 페이지만 분리하기
      </Button>
      <Button type="button" className="none" /* onClick={onCancel} */>
        새로운 노트북으로 분리
      </Button>
    </ModalButtonVerticalStyle>
  );
};

export default ModalButtonVertical;
