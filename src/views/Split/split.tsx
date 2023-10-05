import React, { useState } from "react";
import { format } from "date-fns";
import TimeRange from "../../components/TimelineSlider/App";
import { randomTimes, selectedInterval, timelineInterval } from "./datesSource";
import { SplitRange, SplitDate } from "./SplitStyle";

const Split = () => {
  const [currentInterval, setCurrentInterval] = useState(selectedInterval);

  const onChangeCallback = (formattedNewTime: [Date]) => {
    // 새로운 시간 간격을 받아와서 currentInterval 상태를 업데이트합니다.
    setCurrentInterval(formattedNewTime);
  };

  const formattedDates = currentInterval.map((date, i) => (
    <span key={date.getTime()}>{format(date, "yyyy MM dd, HH:mm")}</span>
  ));

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: "30px",
          paddingTop: "50px",
        }} /* 추후 삭제해야할 style */
      >
        캔버스 영역
      </div>
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
  );
};

export default Split;
