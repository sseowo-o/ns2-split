import React from "react";
import { format } from "date-fns";

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

export interface HandleLabelProps {
  rightEdgeReached: boolean; // rightEdgeReached prop 추가
}

const Handle: React.FC<HandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent = 0 },
  getHandleProps,
}) => {
  const leftPosition = `${percent}%`;

  const isRightEdgeReached = percent === 100;

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
        <StyledHandleLabel rightEdgeReached={isRightEdgeReached}>
          {format(new Date(value), "yyyy-MM-dd HH:mm")}
        </StyledHandleLabel>{" "}
      </StyledHandleContainer>
    </>
  );
};

export default Handle;
