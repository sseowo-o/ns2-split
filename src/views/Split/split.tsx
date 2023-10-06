import React, { useState, useEffect } from "react";
import { format } from "date-fns";

import { ReactComponent as UpNote } from "../../assets/icon/SF_up_note.svg";
import { ReactComponent as Backward } from "../../assets/icon/SF_backward.svg";

import TimeRange from "../../components/TimelineSlider/App";
import { randomTimes, selectedInterval, timelineInterval } from "./datesSource";
import { SplitRange, SplitDate, NoteDate } from "./SplitStyle";
import Modal from "../../components/Modal/Modal";
import SeperateWriting from "../../components/Modal/SeperateWriting";
import ModalButton from "../../components/Modal/ModalButton";
import Snackbar from "../../components/SnackBar/SnackBar";

const Split = () => {
  const [currentInterval, setCurrentInterval] = useState(selectedInterval);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const onChangeCallback = (formattedNewTime: [Date]) => {
    setCurrentInterval(formattedNewTime);
  };

  const formattedDates = currentInterval.map((date, i) => (
    <span key={date.getTime()}>{format(date, "yyyy-MM-dd HH:mm")}</span>
  ));

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          <NoteDate>
            <span>2023-07-28 03:00</span>
            <span>2023-10-06 03:00</span>
          </NoteDate>
        </SplitRange>
      </div>

      {/* 모달 컴포넌트 */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SeperateWriting />
        <ModalButton onCancel={handleCloseModal} onConfirm={handleConfirm} />
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
