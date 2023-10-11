import React, { useState } from "react";
import { scaleTime } from "d3-scale";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import {
  format,
  addHours,
  startOfToday,
  endOfToday,
  differenceInMilliseconds,
  addMinutes,
  isBefore,
  isAfter,
} from "date-fns";

import SliderRail from "./SliderRail";
import Track from "./Track";
import Handle from "./Handle";
import RandomTimeMarker from "./RandomTimeMarker";
import { TimeRangeContainer } from "./StyledComponents";
import { writingRangeInterval, UpdateCallbackData } from "./types";

interface TimeRangeProps {
  ticksNumber?: number /* 타임라인의 단계 수(기본값은 30분) */;
  selectedInterval?: [Date] /* 타임라인 내에서 선택한 간격 */;
  timelineInterval?: [Date, Date] /* 표시간격 */;
  writingRangeIntervals?: writingRangeInterval[];
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
  writingRangeIntervals: [{ start: new Date(), end: new Date() }],
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

const getFormattedBlockedIntervals = (
  [startTime, endTime]: Date[],
  blockedDates: writingRangeInterval[] = []
) => {
  if (!blockedDates.length) return null;

  const timelineLength = differenceInMilliseconds(endTime, startTime);
  const getConfig = getTimelineConfig(startTime, timelineLength);

  const formattedBlockedDates = blockedDates.map((interval, index) => {
    let { start, end } = interval;
    const { color } = interval;

    if (isBefore(start, startTime)) start = startTime;
    if (isAfter(end, endTime)) end = endTime;

    const source = getConfig(start, "blocked-start");
    const target = getConfig(end, "blocked-end");

    return { id: `blocked-track-${index}`, source, target, color };
  });

  return formattedBlockedDates;
};

const getNowConfig = ([startTime, endTime]: Date[]) => {
  const timelineLength = differenceInMilliseconds(endTime, startTime);
  const getConfig = getTimelineConfig(startTime, timelineLength);
  const source = getConfig(new Date(), "now-start");
  const target = getConfig(addMinutes(new Date(), 1), "now-end");
  return { id: "now-track", source, target };
};

function TimeRange(props: TimeRangeProps) {
  const [writingRangeIntervals, setwritingRangeIntervals] = useState(
    getFormattedBlockedIntervals(
      props.timelineInterval ?? [startOfToday(), endOfToday()],
      props.writingRangeIntervals
    ) || []
  );

  const [nowConfig, setNowConfig] = useState(
    getNowConfig(props.timelineInterval ?? [startOfToday(), endOfToday()])
  );

  const onChange = (newTime: ReadonlyArray<number>) => {
    const formattedNewTime = newTime.map((t) => new Date(t));
    if (props.onChangeCallback) {
      props.onChangeCallback([formattedNewTime[0]]);
    }
  };

  const checkIsSelectedIntervalNotValid = (
    [start, end]: [number, number],
    source: { value: number },
    target: { value: number }
  ) => {
    const { value: startInterval } = source;
    const { value: endInterval } = target;

    if (
      (startInterval > start && endInterval <= end) ||
      (startInterval >= start && endInterval < end)
    )
      return true;
    if (start >= startInterval && end <= endInterval) return true;

    const isStartInBlockedInterval =
      start > startInterval && start < endInterval && end >= endInterval;
    const isEndInBlockedInterval =
      end < endInterval && end > startInterval && start <= startInterval;

    return isStartInBlockedInterval || isEndInBlockedInterval;
  };

  const onUpdate = (newTime: ReadonlyArray<number>) => {
    const { onUpdateCallback } = props;

    if (!onUpdateCallback) {
      return;
    }

    if (writingRangeIntervals?.length) {
      const isValuesNotValid = writingRangeIntervals.some(
        ({ source, target }) =>
          checkIsSelectedIntervalNotValid(
            [newTime[0], newTime[1]],
            source,
            target
          )
      );
      const formattedNewTime = newTime.map((t) => new Date(t));
      onUpdateCallback({ error: isValuesNotValid, time: formattedNewTime });
      return;
    }

    const formattedNewTime = newTime.map((t) => new Date(t));
    onUpdateCallback({ error: false, time: formattedNewTime });
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
                          writingRange={false}
                        />
                      ))}
                    </>
                  )}
                </Tracks>
              </div>
            );
          })}

        {writingRangeIntervals?.length && (
          <Tracks left={false} right={false}>
            {({ getTrackProps }) => (
              <>
                {writingRangeIntervals.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                    writingRange={true}
                  />
                ))}
              </>
            )}
          </Tracks>
        )}
      </Slider>
    </TimeRangeContainer>
  );
}

TimeRange.defaultProps = defaultProps;

export default TimeRange;
