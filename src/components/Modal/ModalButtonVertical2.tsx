import React from "react";
import { Button } from "../Icon/Button";
import styled from "styled-components";

const ModalButtonVertical2Style = styled.div`
  width: 100%;
  margin-top: 32px;
  & button {
    margin: 4px 0;
  }
`;

interface ModalButtonVertical2Props {
  onCancel: () => void;
  onConfirm: () => void;
}

const ModalButtonVertical2: React.FC<ModalButtonVertical2Props> = ({
  onCancel,
  onConfirm,
}) => {
  return (
    <ModalButtonVertical2Style>
      <Button type="button" className="confirm" /* onClick={onConfirm} */>
        이어서 분리하기
      </Button>
      <Button type="button" className="cancle" /* onClick={onConfirm} */>
        새로운 노트북으로 분리하기
      </Button>
      <Button type="button" className="none" onClick={onCancel}>
        겹친 필기분리 취소
      </Button>
    </ModalButtonVertical2Style>
  );
};

export default ModalButtonVertical2;
