import { FC } from "react";
import styled from "styled-components";

interface IconProps {
  w?: number;
}

const StyledSvg = styled.svg<{ $w: number }>`
  width: ${({ $w }) => $w}px;
  height: ${({ $w }) => $w}px;
`;

const InstagramIcon: FC<IconProps> = ({ w = 24 }) => (
  <StyledSvg
    enable-background="new 0 0 128 128"
    height="128px"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 128 128"
    width="128px"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    $w={w}
  >
    <linearGradient
      gradientTransform="matrix(1 0 0 -1 594 633)"
      gradientUnits="userSpaceOnUse"
      id="SVGID_1_"
      x1="-577.5122"
      x2="-482.4879"
      y1="501.1455"
      y2="636.8544"
    >
      <stop offset="0" style={{ stopColor: "#FFB900" }} />
      <stop
        offset="1"
        style={{
          stopColor: "#9100EB",
        }}
      />
    </linearGradient>
    <path
      d="M128,112c0,8.8-7.2,16-16,16H16c-8.8,0-16-7.2-16-16V16C0,7.2,7.2,0,16,0h96c8.8,0,16,7.2,16,16V112z  "
      fill="url(#SVGID_1_)"
    />
    <g>
      <g>
        <path
          d="M86,112H42c-14.336,0-26-11.663-26-26V42c0-14.336,11.664-26,26-26h44c14.337,0,26,11.664,26,26v44    C112,100.337,100.337,112,86,112z M42,24c-9.925,0-18,8.075-18,18v44c0,9.925,8.075,18,18,18h44c9.925,0,18-8.075,18-18V42    c0-9.925-8.075-18-18-18H42z"
          fill="#FFFFFF"
        />
      </g>
      <g>
        <path
          d="M64,88c-13.234,0-24-10.767-24-24c0-13.234,10.766-24,24-24c13.233,0,24,10.766,24,24    C88,77.233,77.233,88,64,88z M64,48c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S72.822,48,64,48z"
          fill="#FFFFFF"
        />
      </g>
      <g>
        <circle cx="89.5" cy="38.5" fill="#FFFFFF" r="5.5" />
      </g>
    </g>
  </StyledSvg>
);

export default InstagramIcon;
