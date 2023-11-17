import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Onboarding } from "../../assets/icon/Onboarding.svg";
import OnboardingSwiper from "components/Swiper/OnboardingSwiper";
import SwiperModal from "components/Swiper/SwiperModal";

const ModalContainer = styled.article`
  &.open {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  & button.close {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    &:after,
    &:before {
      position: absolute;
      top: 25%;
      left: 50%;
      content: " ";
      height: 25px;
      width: 2px;
      background-color: #000;
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:before {
      transform: rotate(45deg);
    }
  }
`;

const ModalStyle = styled.div`
  background: #fff;
  border-radius: 10px 10px 0 0;
  padding: 40px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  & .Onboarding {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
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
      width: 100%;
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
  const [showOnboardingPopup, setShowOnboardingPopup] = useState(false);

  const modalStyle = {
    transform: isOpen ? "translateY(0)" : "translateY(100%)",
  };

  const handleModalClick = (e: React.MouseEvent) => {
    // 배경 클릭 시 모달을 닫도록
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOnboardingClick = () => {
    // "Onboarding" 클릭 시 추가 팝업 표시
    setShowOnboardingPopup(true);
  };

  const closeOnboardingPopup = () => {
    // 추가 팝업을 닫을 때
    setShowOnboardingPopup(false);
  };

  return (
    <ModalContainer
      className={`modal ${isOpen ? "open" : ""}`}
      onClick={handleModalClick} // 배경 클릭 시 닫히도록
    >
      <ModalStyle style={modalStyle}>
        <div
          className="modal-content"
          style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}
        >
          {children}
        </div>
        <Onboarding className="Onboarding" onClick={handleOnboardingClick} />
      </ModalStyle>
      {showOnboardingPopup && (
        <SwiperModal
          isOpen={showOnboardingPopup}
          onClose={closeOnboardingPopup}
        >
          <OnboardingSwiper />
          <button className="close" onClick={closeOnboardingPopup}></button>
        </SwiperModal>
      )}
    </ModalContainer>
  );
};

export default Modal;
