import React from "react";
import ToggleSwitch from "../Icon/ToggleSwitch";
import styled from "styled-components";

import { ReactComponent as Book } from "../../assets/cover/book.svg";

const NewModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  & .bookImgWrap {
    height: 203px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    & .bookImg {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      color: #757575;
      font-size: 11px;
      & .book {
        width: 123px;
        height: 185px;
        background: #ddd;
      }
    }
  }

  & .line {
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #dcdcdc;
  }
  & .info {
    & .infoTit {
      display: flex;
      justify-content: space-between;

      & h3 {
        font-size: 17px;
      }
    }

    & .infoCont {
      font-size: 13px;
      color: #757576;
      margin-top: 8px;
    }
  }
`;

const NewModal = () => {
  return (
    <NewModalStyle>
      {/* 모달 내용 */}
      <h2>
        저번에 'Planner Basic003'에 옮긴 거 있는데
        <br />
        여기로 옮길래?
      </h2>
      <div className="bookImgWrap">
        <div className="bookImg">
          <span className="book">
            <Book />
          </span>
          <span>2023 Planner Pro</span>
        </div>
        <span style={{ fontSize: "30px" }}>&raquo; </span>
        <div className="bookImg">
          <span className="book">
            <Book />
          </span>
          <span>2023 Planner Pro_001</span>
        </div>
      </div>
      <span className="line"></span>
      <div className="info">
        <div className="infoTit">
          <h3>분리 후 새 노트북 활성화</h3>
          <ToggleSwitch />
        </div>

        <div className="infoCont">
          해당 기능을 켜면 필기 분리를 할 때마다
          <br />
          자동으로 새 노트북을 활성화합니다.
        </div>
      </div>
    </NewModalStyle>
  );
};

export default NewModal;
