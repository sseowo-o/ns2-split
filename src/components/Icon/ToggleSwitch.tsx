import React, { useState } from "react";
import styled from "styled-components";

// 스타일드 컴포넌트를 사용하여 토글 스위치 스타일링
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 25px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #00838f;
  }

  &:focus + span {
    box-shadow: 0 0 1px #00838f;
  }

  &:checked + span:before {
    transform: translateX(18px);
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #979797;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  height: inherit !important;

  &:before {
    position: absolute;
    content: "";
    height: 19px;
    width: 19px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SwitchContainer>
      <SwitchLabel>
        <SwitchInput
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <SwitchSlider></SwitchSlider>
      </SwitchLabel>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
