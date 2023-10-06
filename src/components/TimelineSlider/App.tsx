import React, { useState } from "react";
import { scaleTime } from "d3-scale";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import {
  format,
  addHours,
  startOfToday,
  endOfToday,
  differenceInMilliseconds,
  addMinutes,
} from "date-fns";

import SliderRail from "./SliderRail";
import Track from "./Track";
import Tick from "./Tick";
import Handle from "./Handle";
import RandomTimeMarker from "./RandomTimeMarker";
import { TimeRangeContainer } from "./StyledComponents";
import { UpdateCallbackData } from "./types";

interface TimeRangeProps {
  ticksNumber?: number /* 타임라인의 단계 수(기본값은 30분) */;
  selectedInterval?: [Date] /* 타임라인 내에서 선택한 간격 */;
  timelineInterval?: [Date, Date] /* 표시간격 */;
  /* 포장 컨테이너의 ClassName */
  containerClassName?: string;
  sliderRailClassName?: string;
  step?: number /* 단계 사이의 밀리초 수(기본값은 30분) */;
  formatTick?: (
    ms: number
  ) => string /* 날짜가 표시되는 형식을 결정하는 함수 */;
  onChangeCallback?: (formattedNewTime: [Date]) => void;
  onUpdateCallback?: (data: UpdateCallbackData) => void;
  randomTimes?: [Date, Date, Date];
}

const defaultProps: TimeRangeProps = {
  /* timelineInterval: [startOfToday(), endOfToday()], */
  /* selectedInterval: [new Date()], */
  containerClassName: "",
  step: 1000 * 60 * 30, // 30 minutes in milliseconds
  ticksNumber: 48, // 30 minutes * 48 = 24 hours
  formatTick: (ms: number) => format(new Date(ms), "HH:mm"),
  onChangeCallback: () => "Change callback not set",
  onUpdateCallback: () => "Update callback not set",
};

const getTimelineConfig =
  (timelineStart: Date, timelineLength: number) =>
  (date: Date, idPrefix: string) => {
    const percent =
      (differenceInMilliseconds(date, timelineStart) / timelineLength) * 100;
    const value = Number(format(date, "T"));
    const id = `${idPrefix}-${value}`;
    return { id, percent, value };
  };

const getNowConfig = ([startTime, endTime]: Date[]) => {
  const timelineLength = differenceInMilliseconds(endTime, startTime);
  const getConfig = getTimelineConfig(startTime, timelineLength);
  const source = getConfig(new Date(), "now-start");
  const target = getConfig(addMinutes(new Date(), 1), "now-end");
  return { id: "now-track", source, target };
};

function TimeRange(props: TimeRangeProps) {
  const [nowConfig, setNowConfig] = useState(
    getNowConfig(props.timelineInterval ?? [startOfToday(), endOfToday()])
  );

  const onChange = (newTime: ReadonlyArray<number>) => {
    const formattedNewTime = newTime.map((t) => new Date(t));
    if (props.onChangeCallback) {
      props.onChangeCallback([formattedNewTime[0]]);
    }
  };

  const onUpdate = (newTime: ReadonlyArray<number>) => {
    const { onUpdateCallback } = props;

    if (!onUpdateCallback) {
      return;
    }

    const formattedNewTime = newTime.map((t) => new Date(t));
    onUpdateCallback({ error: false, time: formattedNewTime });
  };

  const getDateTicks = () => {
    const { timelineInterval, ticksNumber } = props;
    return scaleTime()
      .domain(timelineInterval ?? [startOfToday(), endOfToday()])
      .ticks(ticksNumber)
      .map((t) => +t);
  };

  const timelineInterval = props.timelineInterval || [
    startOfToday(),
    endOfToday(),
  ];

  return (
    <TimeRangeContainer className={props.containerClassName}>
      <Slider
        domain={(props.timelineInterval ?? [startOfToday(), endOfToday()]).map(
          (t) => +t
        )}
        onUpdate={onUpdate}
        onChange={onChange}
        values={(
          props.selectedInterval ?? [new Date(), addHours(new Date(), 1)]
        ).map((t) => +t)}
        rootStyle={{ position: "relative", width: "100%", height: "5rem" }}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <>
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={(
                    props.timelineInterval ?? [startOfToday(), endOfToday()]
                  ).map((t) => +t)}
                  getHandleProps={getHandleProps}
                />
              ))}
            </>
          )}
        </Handles>
        <Tracks left={false} right={true}>
          {({ tracks, getTrackProps }) => (
            <>
              {tracks?.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </>
          )}
        </Tracks>
        {props.randomTimes &&
          props.randomTimes.map((randomTime) => {
            const timelineLength = differenceInMilliseconds(
              timelineInterval[1],
              timelineInterval[0]
            );
            const randomTimePosition =
              (differenceInMilliseconds(randomTime, timelineInterval[0]) /
                timelineLength) *
              100;
            const randomKey = `random-${randomTime.getTime()}`;
            return (
              <div key={randomKey}>
                <RandomTimeMarker
                  time={randomTime}
                  position={randomTimePosition}
                />
                <Tracks left={false} right={true}>
                  {({ tracks, getTrackProps }) => (
                    <>
                      {tracks?.map(({ source, target }) => (
                        <Track
                          key={`random-track-${randomTime.getTime()}`}
                          source={source}
                          target={target}
                          getTrackProps={getTrackProps}
                        />
                      ))}
                    </>
                  )}
                </Tracks>
              </div>
            );
          })}

        {/* 스플릿 range 확대시 시간 보이기 */}
        {/* <Ticks values={getDateTicks()}>
          {({ ticks }) => (
            <>
              {ticks.map((tick) => (
                <Tick
                  key={tick.id}
                  tick={tick}
                  count={ticks.length}
                  format={
                    props.formatTick ??
                    ((ms: number) => format(new Date(ms), "HH:mm"))
                  }
                />
              ))}
            </>
          )}
        </Ticks> */}
      </Slider>
    </TimeRangeContainer>
  );
}

TimeRange.defaultProps = defaultProps;

export default TimeRange;
