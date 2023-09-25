import { FC } from "react";
import styled from "styled-components";

interface IconProps {
  w?: number;
}

const StyledSvg = styled.svg<{ $w: number }>`
  width: ${({ $w }) => $w}px;
  height: ${({ $w }) => $w}px;
`;

const ListIcon: FC<IconProps> = ({ w = 32 }) => (
  <StyledSvg
    enableBackground="new 0 0 32 32"
    id="Glyph"
    version="1.1"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    $w={w}
  >
    <path
      d="M29,16c0,1.104-0.896,2-2,2H11c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C28.104,14,29,14.896,29,16z"
      id="XMLID_352_"
    />
    <path
      d="M29,6c0,1.104-0.896,2-2,2H11C9.896,8,9,7.104,9,6s0.896-2,2-2h16C28.104,4,29,4.896,29,6z"
      id="XMLID_354_"
    />
    <path
      d="M29,26c0,1.104-0.896,2-2,2H11c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C28.104,24,29,24.896,29,26z"
      id="XMLID_356_"
    />
    <path
      d="M3,6c0,1.103,0.897,2,2,2s2-0.897,2-2S6.103,4,5,4S3,4.897,3,6z"
      id="XMLID_358_"
    />
    <path
      d="M3,16c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2S3,14.897,3,16z"
      id="XMLID_360_"
    />
    <path
      d="M3,26c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2S3,24.897,3,26z"
      id="XMLID_362_"
    />
  </StyledSvg>
);

export default ListIcon;
