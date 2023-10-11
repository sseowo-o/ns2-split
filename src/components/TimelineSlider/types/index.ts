export type StyledTrackProps = {
  error: boolean;
  writingRange: boolean;
  sourcePercent: number;
  targetPercent: number;
  color: string;
};

export type writingRangeInterval = {
  start: Date;
  end: Date;
  color?: string;
};

export type UpdateCallbackData = {
  error: boolean;
  time: Date[];
};
