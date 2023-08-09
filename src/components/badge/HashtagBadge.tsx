import { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import CloseIcon from "../icons/badge/CloseIcon";

const Badge = styled.div`
  position: relative;
  padding: 5px;
  background-color: #e8e8e8;
  color: #717171;
  border-radius: 8px;
  min-width: fit-content;
`;
const IconWrapper = styled.div`
  position: absolute;
  top: -8px;
  right: -16px;
  z-index: 2;
  cursor: pointer;
`;

interface HashtagBadgeProps {
  text: string;
  onDeleteClick?: MouseEventHandler<HTMLDivElement>;
}

const HashtagBadge: FC<HashtagBadgeProps> = ({ text, onDeleteClick }) => (
  <Badge>
    {text}
    {onDeleteClick && (
      <IconWrapper onClick={onDeleteClick}>
        <CloseIcon />
      </IconWrapper>
    )}
  </Badge>
);

export default HashtagBadge;
