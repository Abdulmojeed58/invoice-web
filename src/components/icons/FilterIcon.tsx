import React from "react";
import { SVGIconProps } from "./types";

export const FilterIcon: React.FC<SVGIconProps> = ({
  width = "18",
  height = "17",
  fill = "none",
  stroke = "#A0AEC0",
  className = "",
  style = {},
  viewBox = "0 0 18 17",
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
        d="M7.33001 13.5928H1.0293"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.1406 3.90042H16.4413"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.72629 3.84625C5.72629 2.5506 4.66813 1.5 3.36314 1.5C2.05816 1.5 1 2.5506 1 3.84625C1 5.14191 2.05816 6.19251 3.36314 6.19251C4.66813 6.19251 5.72629 5.14191 5.72629 3.84625Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.0002 13.5538C17.0002 12.2581 15.9429 11.2075 14.6379 11.2075C13.3321 11.2075 12.2739 12.2581 12.2739 13.5538C12.2739 14.8494 13.3321 15.9 14.6379 15.9C15.9429 15.9 17.0002 14.8494 17.0002 13.5538Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
