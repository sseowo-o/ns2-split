import React, { useState, ChangeEvent } from "react";
import ToggleSwitch from "../Icon/ToggleSwitch";
import styled from "styled-components";

import { ReactComponent as Book } from "../../assets/cover/book.svg";

const HistorySeperateStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  & p {
    color: #757575;
  }
  & h2 > p {
    font-size: 1.4rem;
    color: #757575;
    margin-top: 1.6rem;
  }

  & .bookImgWrap {
    height: 203px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    & .bookImg {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      color: #757575;
      font-size: 11px;
    }
    & .bookChoice {
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-content: space-between;
      height: 203px;
      & .book {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        justify-content: center;
        height: 50%;
        position: relative;
        padding: 8px 1.6rem;
        border-radius: 5px;
        border: 1.5px solid #ddd;
        opacity: 50%;
        &.selected {
          border-color: #00838f;
          opacity: 100%;
        }
      }

      & svg {
        width: 24px;
        height: 35px;
      }
      & label {
        text-align: center;
        & b {
          font-size: 1.4rem;
        }
      }
      & input {
        position: absolute;
        top: 4px;
        left: 4px;
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

const HistorySeperate: React.FC = () => {
  const [selectedNotebook, setSelectedNotebook] = useState<string | null>(
    "notebook1"
  );

  const handleNotebookSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedNotebook(event.target.value);
  };

  return (
    <HistorySeperateStyle>
      <h2>
        최근에 '<span>바꾼 노트북명</span>'으로 분리한 이력이 있습니다.
        <p>분리할 노트북을 선택해주세요.</p>
      </h2>
      <div className="bookImgWrap">
        <div className="bookImg">
          <span className="book">
            <Book />
          </span>
          <span>2023 Planner Pro</span>
        </div>
        <span style={{ fontSize: "30px" }}>&raquo; </span>
        <div className="bookChoice">
          <label
            className={`book ${
              selectedNotebook === "notebook1" ? "selected" : ""
            }`}
          >
            <Book />

            <input
              type="radio"
              value="notebook1"
              checked={selectedNotebook === "notebook1"}
              onChange={handleNotebookSelect}
            />
            <b>최근 노트북</b>
            <p>바꾼 노트북명</p>
          </label>
          <label
            className={`book ${
              selectedNotebook === "notebook2" ? "selected" : ""
            }`}
          >
            <Book />

            <input
              type="radio"
              value="notebook2"
              checked={selectedNotebook === "notebook2"}
              onChange={handleNotebookSelect}
            />
            <b>새 노트북</b>
            <p>2023 Planner Pro_002</p>
          </label>
        </div>
      </div>
      <span className="line"></span>
      <div className="info">
        <div className="infoTit">
          <h3>분리 노트북 활성화</h3>
          <ToggleSwitch />
        </div>

        <div className="infoCont">
          해당 기능을 켜면 필기 분리를 할 때마다
          <br />
          자동으로 분리한 노트북을 활성화합니다.
        </div>
      </div>
    </HistorySeperateStyle>
  );
};

export default HistorySeperate;
