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

// * 새로 추가된 코드 S
import NewModal from "../../components/Modal/NewModal";
// * 새로 추가된 코드 E

import ModalButton from "../../components/Modal/ModalButton";
import Snackbar from "../../components/SnackBar/SnackBar";

const Split = () => {
  const [currentInterval, setCurrentInterval] = useState(selectedInterval);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // * 새로 추가된 코드 S
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  // * 새로 추가된 코드 E

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

  // * 새로 추가된 코드 S
  /* 히스토리 필기분리 팝업 ex)전에 옮긴 노트에 마저 옮길래? */
  const handleOpenNewModal = () => {
    setIsNewModalOpen(true);
  };
  const handleCloseNewModal = () => {
    setIsNewModalOpen(false);
  };
  // * 새로 추가된 코드 E

  /* 스낵바 */
  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsSnackbarOpen(true); // 스낵바를 열도록 상태 업데이트
  };
  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.background = "rgba(0, 0, 0, 0.7)";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.background = "initial";
    }

    // 화면 크기에 따라 screenWidth 상태 업데이트
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.background = "initial";
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

          {/* 새로 추가된 코드 S */}
          <button
            style={{ width: "44px", padding: "0" }}
            onClick={handleOpenNewModal}
          >
            <UpNote />
            히스토리 분리 모달
          </button>
          {/* 새로 추가된 코드 E */}
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SeperateWriting />
        <ModalButton onCancel={handleCloseModal} onConfirm={handleConfirm} />
      </Modal>

      {/* 새로 추가된 코드 S */}
      {/* 히스토리 필기분리 팝업 ex)전에 옮긴 노트에 마저 옮길래? */}
      <Modal isOpen={isNewModalOpen} onClose={handleCloseNewModal}>
        <NewModal />
        <ModalButton onCancel={handleCloseNewModal} onConfirm={handleConfirm} />
      </Modal>
      {/* 새로 추가된 코드 E */}

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
