import React, { useState } from "react";
import styled, { css } from "styled-components";

const size = "40px";
const angle = "40deg";

const arrowTransform = (angle: string, x: string = "0", y: string = "0") => css`
  & i:first-child {
    transform: translate(${x}, ${y}) rotate(${angle});
  }

  & i:last-child {
    transform: translate(${x}, ${y}) rotate(-${angle});
  }
`;

const Container = styled.div`
  text-align: center;
  position: absolute;
  height: ${size};
  left: 50%;
  bottom: 15%;
  border-radius: 100px;
  border: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateX(-50%);
`;

const Button = styled.button`
  width: ${size};
  height: ${size};
  transform: translate3d(0, 0, 0);


  i {
    position: absolute;
    top: 50%;
    left: 42.5%;
    width: 8px;
    height: 2px;
    background: #757575;
    transition: all 0.15s ease;
}
  }

  &.left {
    i {
      transform-origin: 0% 50%;
    }
    ${arrowTransform(angle, "0", "-1px")}
    &[data-state="disabled"] {
      ${arrowTransform("0deg", "-5px", "0")}
    }
  }

  &.right {
    i {
      transform-origin: 100% 50%;
    }
    ${arrowTransform(angle, "0", "-1px")}
    &[data-state="disabled"] {
      ${arrowTransform("0deg", "5px", "0")}
    }
  }

  &[data-state="disabled"] {
    opacity: 0.3;
    cursor: default;
  }
`;

const Counter = styled.div`
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage: propCurrentPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const total = 100;

  const handlePageChange = (offset: number) => {
    const newIndex = Math.min(Math.max(currentPage + offset, 1), total);
    setCurrentPage(newIndex);
  };

  return (
    <Container>
      <Button
        className={`left ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => handlePageChange(-1)}
      >
        <i></i>
        <i></i>
      </Button>

      <Counter>
        {currentPage} / {total}
      </Counter>
      <Button
        className={`right ${currentPage === total ? "disabled" : ""}`}
        onClick={() => handlePageChange(1)}
      >
        <i></i>
        <i></i>
      </Button>
    </Container>
  );
};

export default Pagination;
