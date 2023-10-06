import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import TimeRange from "../../components/TimelineSlider/App";
import { randomTimes, selectedInterval, timelineInterval } from "./datesSource";
import { SplitRange, SplitDate } from "./SplitStyle";
import Modal from "../../components/Modal/Modal";
import SeperateWriting from "../../components/Modal/SeperateWriting";
import ModalButton from "../../components/Modal/ModalButton";

const Split = () => {
  const [currentInterval, setCurrentInterval] = useState(selectedInterval);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SeperateWriting />
        <ModalButton onCancel={handleCloseModal} onConfirm={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Split;
