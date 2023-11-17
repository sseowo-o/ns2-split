import React from "react";
import styled from "styled-components";

const CheckPageContainer = styled.article`
  &.open {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
  }
`;

const CheckPageStyle = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 40px 20px;
  overflow: scroll;

  & >div{
    max-width: 700px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;

  }
  & h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  & p.slideLabel{
    font-size: 1.2rem;
    color: #757575;
    margin-bottom: 4px;
    & span{color:#00838F}
  }

  }
`;

interface SwiperModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SwiperModal: React.FC<SwiperModalProps> = ({ isOpen, children }) => {
  const swiperModalStyle = {
    transform: isOpen ? "translateY(0)" : "translateY(100%)",
  };
  return (
    <CheckPageContainer className={`swiperModal ${isOpen ? "open" : ""}`}>
      <CheckPageStyle style={swiperModalStyle}>
        <div>{children}</div>
      </CheckPageStyle>
    </CheckPageContainer>
  );
};

export default SwiperModal;
