import React from "react";
import { SVGIconProps } from "./types";

export const ArrowIcon: React.FC<SVGIconProps> = ({
  width = "32",
  height = "32",
  fill = "none",
  stroke = "white",
  className = "",
  style = {},
  viewBox = "0 0 32 32",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox={viewBox}
      className={className}
      style={style}
    >
      <path
        d="M14.3724 21.8154L21.6305 21.8154M21.6305 21.8154L21.6305 14.5573M21.6305 21.8154L10.7433 10.9282"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
