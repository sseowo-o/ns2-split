import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import TimeRange from "../../components/TimelineSlider/App";
import { randomTimes, selectedInterval, timelineInterval } from "./datesSource";
import {
  SplitRange,
  SplitDate,
  Modal,
  ModalContents,
  ModalButton,
} from "./SplitStyle";
import ToggleSwitch from "../../components/Icon/ToggleSwitch";
import { Button } from "../../components/Icon/Button";

const Split = () => {
  const [currentInterval, setCurrentInterval] = useState(selectedInterval);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const onChangeCallback = (formattedNewTime: [Date]) => {
    // 새로운 시간 간격을 받아와서 currentInterval 상태를 업데이트합니다.
    setCurrentInterval(formattedNewTime);
  };

  const formattedDates = currentInterval.map((date, i) => (
    <span key={date.getTime()}>{format(date, "yyyy-MM-dd HH:mm")}</span>
  ));

  // 분리 버튼을 눌렀을 때 모달을 열도록 핸들러 함수 작성
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫는 핸들러 함수
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // 모달이 열렸을 때 body 요소에 스타일을 추가
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // 스크롤 막기
      document.body.style.background = "rgba(0, 0, 0, 0.7)"; // 어두운 배경 스타일
    } else {
      // 모달이 닫혔을 때 스타일 제거
      document.body.style.overflow = "auto"; // 스크롤 다시 허용
      document.body.style.background = "initial"; // 초기 배경 스타일
    }

    // 모달이 닫힐 때 cleanup 함수
    return () => {
      document.body.style.overflow = "auto"; // 스크롤 다시 허용
      document.body.style.background = "initial"; // 초기 배경 스타일
    };
  }, [isModalOpen]);

  return (
    <>
      <div>
        {/* 임시 헤더, 캔버스영역 s */}
        <header
          style={{
            display: "flex",
            padding: "0px 8px",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "11px",
          }}
        >
          <span style={{ width: "44px" }}></span>
          <span
            style={{
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "0.352px",
            }}
          >
            월요회의 정리
          </span>
          <button
            style={{ width: "44px", padding: "0" }}
            onClick={handleOpenModal}
          >
            분리
          </button>
        </header>
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            paddingTop: "50px",
            minHeight: "60vh",
          }}
        >
          캔버스 영역
        </div>
        {/* 임시 헤더, 캔버스영역 e */}

        <SplitRange>
          <div className="container">
            <TimeRange
              selectedInterval={currentInterval}
              timelineInterval={timelineInterval}
              onChangeCallback={onChangeCallback}
              randomTimes={randomTimes}
            />
            <SplitDate>{formattedDates}</SplitDate>
          </div>
        </SplitRange>
      </div>

      {/* 모달 컴포넌트 */}
      {isModalOpen && (
        <Modal>
          <h2>
            선택하신 필기는
            <br />새 노트북으로 분리됩니다.
          </h2>
          <ModalContents>
            <div className="bookImgWrap">
              <div className="bookImg">
                <span className="book"></span>
                <span>2023 Planner Pro</span>
              </div>
              <span style={{ fontSize: "30px" }}>&raquo; </span>
              <div className="bookImg">
                <span className="book"></span>
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
          </ModalContents>
          <ModalButton>
            <Button type="button" className="cancle" onClick={handleCloseModal}>
              취소
            </Button>
            <Button
              type="button"
              className="confirm"
              onClick={handleCloseModal}
            >
              분리하기
            </Button>
          </ModalButton>
        </Modal>
      )}
    </>
  );
};

export default Split;
