import React from "react";
import ToggleSwitch from "../Icon/ToggleSwitch";
import styled from "styled-components";

import { ReactComponent as Book } from "../../assets/cover/book.svg";

const PackSeperateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  text-align: center;

  & p{font-size: 1.4rem; color: #757575;}

  }
`;

const PackSeperate = () => {
  return (
    <PackSeperateStyle>
      <Book />
      <h2>
        '2023 Planner Basic'에
        <br />
        겹친 필기가 더 있습니다.
      </h2>
      <p>
        나머지 겹친 필기들을 새로 만들어진
        <br />
        노트북 <b>'2023 Planner Pro_001'</b>으로
        <br />
        일괄 분리 및 이동하시겠습니까?
      </p>
    </PackSeperateStyle>
  );
};

export default PackSeperate;
