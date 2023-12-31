/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

import Notes from "../../assets/icon/SF_notes.png";

const PackSeperateStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  text-align: center;

  & li:last-child{font-size: 1.4rem; color: #757575;}

  }
`;

const PackSeperate = () => {
  return (
    <PackSeperateStyle>
      <li>
        <img src={Notes}></img>
      </li>
      <li>
        <h2>
          '2023 Planner Pro'에
          <br />
          겹친 필기가 더 있습니다.
        </h2>
      </li>
      <li>
        나머지 겹친 필기들을
        <br />
        <b>'2023 Planner Pro_001'</b>으로
        <br />
        일괄 분리 및 이동하시겠습니까?
      </li>
    </PackSeperateStyle>
  );
};

export default PackSeperate;
