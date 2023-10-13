import React from "react";
import ToggleSwitch from "../Icon/ToggleSwitch";
import styled from "styled-components";

import { ReactComponent as Book } from "../../assets/cover/book.svg";

const HistorySeperateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  text-align: center;

  & p{font-size: 1.4rem; color: #757575;}

  }
`;

const HistorySeperate = () => {
  return (
    <HistorySeperateStyle>
      <Book />
      <h2>
        최근 '2023 Planner Pro_001'으로
        <br />
        분리한 이력이 있습니다.
      </h2>
      <p>이어서 분리하시겠습니까?</p>
    </HistorySeperateStyle>
  );
};

export default HistorySeperate;
