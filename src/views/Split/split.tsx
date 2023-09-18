import React, { useState } from 'react';
import { format } from 'date-fns';
import TimeRange from '../../components/TimelineSlider/App';
import { randomTimes, selectedInterval, timelineInterval } from './datesSource';

const Split = () => {
  const [currentInterval, setCurrentInterval] = useState(selectedInterval);

  const onChangeCallback = (formattedNewTime: [Date]) => {
    // 새로운 시간 간격을 받아와서 currentInterval 상태를 업데이트합니다.
    setCurrentInterval(formattedNewTime);
  };

  const formattedDates = currentInterval.map((date, i) => (
    <span key={date.getTime()}>{format(date, 'yyyy MM dd, HH:mm')}</span>
  ));

  return (
    <div>
      <div
        style={{
          width: '80vw',
          height: '60vh',
          margin: '24px auto',
          background: '#fff',
          borderRadius: '20px',
        }}
      >
        캔버스 영역
      </div>
      <div
        style={{
          padding: '16px',
          /* height: '20vh', */
          background: '#fff',
        }}
      >
        <div className="container">
          <div className="info" style={{ fontSize: '20px' }}>
            {formattedDates}
          </div>

          <TimeRange
            selectedInterval={currentInterval}
            timelineInterval={timelineInterval}
            onChangeCallback={onChangeCallback}
            randomTimes={randomTimes}
          />
        </div>
      </div>
    </div>
  );
};

export default Split;
