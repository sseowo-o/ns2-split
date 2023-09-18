import React from 'react';

import { StyledHandleContainer, StyledHandleWrapper } from './StyledComponents';

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
      />
    </>
  );
};

export default Handle;
