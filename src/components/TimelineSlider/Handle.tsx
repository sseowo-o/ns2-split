import React from "react";
import { format } from "date-fns"; // date-fns에서 format 함수 import

import {
  StyledHandleContainer,
  StyledHandleWrapper,
  StyledHandleLabel,
} from "./StyledComponents";

interface HandleProps {
  domain: number[];
  handle: {
    id: string;
    value: number;
    percent: number;
  };
  getHandleProps: (id: string) => any;
}

const Handle: React.FC<HandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent = 0 },
  getHandleProps,
}) => {
  const leftPosition = `${percent}%`;

  return (
    <>
      <StyledHandleWrapper
        style={{ left: leftPosition }}
        {...getHandleProps(id)}
      />
      <StyledHandleContainer
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{ left: leftPosition }}
      >
        <StyledHandleLabel>
          {format(new Date(value), "yyyy-MM-dd HH:mm")}
        </StyledHandleLabel>{" "}
        {/* 시간을 함께 보이도록 추가 */}
      </StyledHandleContainer>
    </>
  );
};

export default Handle;
