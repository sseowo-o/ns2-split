import React from "react";

interface RandomTimeMarkerProps {
  time: Date;
  position: number;
}

const RandomTimeMarker: React.FC<RandomTimeMarkerProps> = ({
  time,
  position,
}) => (
  <div
    style={{
      position: "absolute",
      left: `${position}%`,
      transform: "translateX(-50%)",
      zIndex: 3,
      textIndent: "-9999px",
      background: "#B2D7DA",
      width: "2px",
      height: "5rem",
      cursor: "pointer",
    }}
  >
    {time.toLocaleTimeString()}
  </div>
);

export default RandomTimeMarker;
