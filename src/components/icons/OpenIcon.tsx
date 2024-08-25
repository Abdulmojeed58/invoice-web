import React from "react";
import { SVGIconProps } from "./types";

export const OpenIcon: React.FC<SVGIconProps> = ({
  width = "24",
  height = "24",
  fill = "none",
  stroke = "#50FE8B",
  className = "",
  style = {},
  viewBox = "0 0 24 24",
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
        d="M3 17H21M3 12H21M3 7H21"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
