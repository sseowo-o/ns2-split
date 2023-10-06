import React, { useEffect } from "react";
import styled from "styled-components";

const SnackbarStyle = styled.div`
  width: 80%;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  color: #fff;
  z-index: 9999;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  & p {
    font-size: 14px;
    text-align: center;
  }
`;

const Snackbar: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // 3초 후에 자동으로 사라짐

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <SnackbarStyle>
      <p>{message}</p>
    </SnackbarStyle>
  );
};

export default Snackbar;
