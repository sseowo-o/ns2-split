import React, { useState, useEffect } from "react";
import { format } from "date-fns";

import { ReactComponent as UpNote } from "../../assets/icon/SF_up_note.svg";
import { ReactComponent as Backward } from "../../assets/icon/SF_backward.svg";

import TimeRange from "../../components/TimelineSlider/App";
import {
  randomTimes,
  selectedInterval,
  timelineInterval,
  writingRangeIntervals,
} from "./datesSource";
import { SplitRange, NoteDate } from "./SplitStyle";

import Modal from "../../components/Modal/Modal";
import SeperateWriting from "../../components/Modal/SeperateWriting";
import PackSeperate from "../../components/Modal/PackSeperate";
import HistorySeperate from "../../components/Modal/HistorySeperate";

import ModalButtonHorizon from "../../components/Modal/ModalButtonHorizon";
import ModalButtonVertical from "../../components/Modal/ModalButtonVertical";
import Snackbar from "../../components/SnackBar/SnackBar";

const Split = () => {
  const [currentInterval, setCurrentInterval] = useState(selectedInterval);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isModalOpenInner, setIsModalOpenInner] = useState(false);

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const onChangeCallback = (formattedNewTime: [Date]) => {
    setCurrentInterval(formattedNewTime);
  };

  /* 일반 필기분리 팝업 */
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  /* 히스토리 필기분리 팝업 ex)전에 옮긴 노트에 마저 옮길래? */
  const handleOpenNewModal = () => {
    setIsNewModalOpen(true);
  };
  const handleCloseNewModal = () => {
    setIsNewModalOpen(false);
  };

  /* 일반 필기분리 팝업 -> 추가 분리 팝업(2중) */
  const handleModalOpenInner = () => {
    setIsModalOpen(false);
    setIsNewModalOpen(false);
    setIsModalOpenInner(true);
  };

  const handleCloseInnerModal = () => {
    setIsModalOpenInner(false);
  };

  /* 스낵바 */
  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsModalOpenInner(false);
    setIsSnackbarOpen(true); // 스낵바를 열도록 상태 업데이트
  };
  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

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
          <span style={{ width: "44px" }}>
            <Backward />
          </span>
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
            <UpNote />
            일반 분리 모달
          </button>

          <button
            style={{ width: "44px", padding: "0" }}
            onClick={handleOpenNewModal}
          >
            <UpNote />
            히스토리 분리 모달
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
              writingRangeIntervals={writingRangeIntervals}
            />
            {/* 화면 크기에 따라 다른 내용을 표시 */}
            <NoteDate>
              {screenWidth >= 1024 ? (
                <>
                  <span>28th-April-2023 (Wed) 03:00</span>
                  <span>28th-April-2023 (Wed) 03:00</span>
                </>
              ) : screenWidth >= 768 ? (
                <>
                  <span>2023-10-06 03:00</span>
                  <span>2023-10-06 03:00</span>
                </>
              ) : (
                <>
                  <span>2023-10-06</span>
                  <span>2023-10-06</span>
                </>
              )}
            </NoteDate>
          </div>
        </SplitRange>
      </div>

      {/* 일반 필기분리 모달 */}
      <div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <SeperateWriting />
          <ModalButtonHorizon
            onCancel={handleCloseModal}
            onConfirm={handleModalOpenInner}
          />
        </Modal>
      </div>

      {/* 히스토리 필기분리 팝업 ex)전에 옮긴 노트에 마저 옮길래? */}
      <Modal isOpen={isNewModalOpen} onClose={handleCloseNewModal}>
        <HistorySeperate />
        <ModalButtonHorizon
          onCancel={handleCloseNewModal}
          onConfirm={handleModalOpenInner}
        />
      </Modal>

      {/* 겹침 필기분리 */}
      <Modal isOpen={isModalOpenInner} onClose={handleCloseInnerModal}>
        <PackSeperate />
        <ModalButtonVertical
          onCancel={handleCloseInnerModal}
          onConfirm={handleConfirm}
        />
      </Modal>

      {/* 스낵바 */}
      {isSnackbarOpen && (
        <Snackbar
          message="2023 Planner Basic 003으로 분리되었습니다."
          onClose={handleCloseSnackbar}
        />
      )}
    </>
  );
};

export default Split;
