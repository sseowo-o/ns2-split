import styled from "@emotion/styled";
import type { StyledTrackProps } from "./types";
import type { HandleLabelProps } from "./Handle";

export const TimeRangeContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 8px;
`;

export const StyledTrack = styled.div<StyledTrackProps>`
  position: absolute;
  height: 5rem;
  cursor: pointer;
  transition:
    background-color 0.15s ease-in-out,
    border-color 0.15s ease;
  z-index: 1;
  border-radius: 2.5px;
  left: ${({ sourcePercent }) => `${sourcePercent}%`};
  width: ${({ sourcePercent, targetPercent }) =>
    `calc(${targetPercent - sourcePercent}%)`};

  background-color: #00838f;
  border: 1px solid #00838f;
`;

/** Slider used for input */
export const StyledOuterRailDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 5rem;
  cursor: pointer;
`;

/** Slider used for drawing */
export const StyledInnerRailDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 5rem;
  border-radius: 2.5px;
  pointer-events: none;
  background-color: #f5f7fa;
  border-bottom: 1px solid #c8cacc;
`;

export const StyledHandleWrapper = styled.div`
  position: absolute;
  -webkit-tap-highlight-color: #000000;
  transform: translate(-50%, 50%);
  z-index: 6;
  width: 10px;
  height: 24px;
  cursor: pointer;
  background-color: transparent;
`;

export const StyledHandleContainer = styled.div`
  position: absolute;
  display: flex;
  transform: translate(-50%, 50%);
  z-index: 4;
  width: 10px;
  height: 24px;
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  background-color: #fff;
`;

export const StyledHandleMarker = styled.div<{ error: boolean }>`
  width: 2px;
  height: 12px;
  margin: auto;
  border-radius: 2px;
  background-color: ${({ error }) =>
    error ? "rgb(214, 0, 11)" : "rgb(98, 203, 102)"};
  transition: background-color 0.2s ease;
`;

export const StyledHandleLabel = styled.div<HandleLabelProps>`
  background: #00838f;
  position: absolute;
  width: 115px;
  top: -40px;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px;
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  left: -50px;
`;
