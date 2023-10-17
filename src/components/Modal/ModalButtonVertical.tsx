import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../Icon/Button";

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
  const navigate = useNavigate();
  const navigate2 = useNavigate();

  const SplitBatchPagination = () => {
    navigate("/SplitBatchPagination");
  };

  return (
    <ModalButtonVerticalStyle>
      <Button type="button" className="confirm" onClick={SplitBatchPagination}>
        일괄 분리하기
      </Button>
      <Button type="button" className="cancle" onClick={onConfirm}>
        현재 페이지만 분리하기
      </Button>
      <Button type="button" className="none" onClick={onCancel}>
        취소
      </Button>
    </ModalButtonVerticalStyle>
  );
};

export default ModalButtonVertical;
