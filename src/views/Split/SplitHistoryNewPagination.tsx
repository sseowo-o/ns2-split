import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import SelectSeperate from "../../components/Modal/SelectSeperate";
import ModalButtonHorizon from "../../components/Modal/ModalButtonHorizon";

import Snackbar from "../../components/SnackBar/SnackBar";

import Pagination from "../../components/Pagination/Pagination";

const itemsPerPage = 10; // 페이지 당 아이템 수
const totalItems = 100; // 전체 아이템 수

const SplitHistoryNewPagination = () => {
  const [currentInterval, setCurrentInterval] = useState(selectedInterval);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  // 스낵바 열기
  const openSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setIsSnackbarOpen(true);
  };

  const handleConfirm = () => {
    navigate("/main");
    openSnackbar("'2023 Planner Pro_001'으로 분리되었습니다.");
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
            SKIP
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
          캔버스 영역 / 최근 노트로 일괄분리
        </div>
        {/* 임시 헤더, 캔버스영역 e */}

        {/* Pagination 컴포넌트를 사용합니다. */}
        <Pagination
          totalPages={Math.ceil(totalItems / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

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

      {/* 일괄 필기분리 모달 */}
      <div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <SelectSeperate />
          <ModalButtonHorizon
            onCancel={handleCloseModal}
            onConfirm={handleConfirm}
          />
        </Modal>
      </div>

      {/* 스낵바 */}
      {isSnackbarOpen && (
        <Snackbar message={snackbarMessage} onClose={handleCloseSnackbar} />
      )}
    </>
  );
};

export default SplitHistoryNewPagination;
