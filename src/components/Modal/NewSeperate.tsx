import React, { useState } from "react";
import ToggleSwitch from "../Icon/ToggleSwitch";
import styled from "styled-components";

import { ReactComponent as Book } from "../../assets/cover/book.svg";
import { ReactComponent as Thumb } from "../../assets/cover/thumb.svg";

const NewSeperateStyle = styled.div`
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

const NewSeperate = () => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [inputText, setInputText] = useState("");
  const [maxBytes, setMaxBytes] = useState(20); // 최대 바이트 수
  const [maxKoreanCharacters, setMaxKoreanCharacters] = useState(12); // 최대 한글 글자수

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    let koreanCharacterCount = (text.match(/[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]/g) || [])
      .length;

    if (koreanCharacterCount <= maxKoreanCharacters) {
      setInputText(text);
    }
  };

  return (
    <NewSeperateStyle>
      <h2>
        선택하신 필기는{" "}
        <input
          onFocus={() => {
            setIsInputClicked(true);
          }}
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "2023 Planner Pro_001"}
          type="text"
          value={inputText}
          onChange={handleInputChange}
          maxLength={maxBytes}
        />
        으로 분리됩니다.
      </h2>
      <div className="bookImgWrap">
        <div className="bookImg">
          <span className="book">
            <Thumb />
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
          <h3>분리 노트북 활성화</h3>
          <ToggleSwitch />
        </div>

        <div className="infoCont">
          해당 기능을 켜면 필기 분리를 할 때마다
          <br />
          자동으로 분리한 노트북을 활성화합니다.
        </div>
      </div>
    </NewSeperateStyle>
  );
};

export default NewSeperate;
