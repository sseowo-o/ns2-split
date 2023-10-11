/* 슬라이드 조절하는 부분 */

import React from "react";

import { StyledTrack } from "./StyledComponents";

type TrackProps = {
  source: {
    id: string;
    value: number;
    percent: number;
  };
  target: {
    id: string;
    value: number;
    percent: number;
  };
  writingRange?: boolean;
  getTrackProps: () => any;
};

const Track: React.FC<TrackProps> = ({
  source,
  target,
  writingRange,
  getTrackProps,
}) => (
  <StyledTrack
    sourcePercent={source.percent}
    targetPercent={target.percent}
    writingRange={writingRange}
    {...getTrackProps()}
  />
);

export default Track;
