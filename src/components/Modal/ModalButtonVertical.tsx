import React from "react";
import styled from "styled-components";
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
  onCheckPage: () => void;
}

const ModalButtonVertical: React.FC<ModalButtonVerticalProps> = ({
  onCancel,
  onConfirm,
  onCheckPage,
}) => {
  return (
    <>
      <ModalButtonVerticalStyle>
        <Button type="button" className="confirm" onClick={onCheckPage}>
          일괄 분리하기
        </Button>
        <Button type="button" className="cancel" onClick={onConfirm}>
          현재 페이지만 분리하기
        </Button>
        <Button type="button" className="none" onClick={onCancel}>
          취소
        </Button>
      </ModalButtonVerticalStyle>
      {/* 일반 필기분리 모달 */}
    </>
  );
};

export default ModalButtonVertical;
