import { FC, MouseEventHandler, useMemo } from "react";
import styled from "styled-components";

const StyledDiv = styled.div<{ $isSelected?: boolean }>`
  min-width: fit-content;
  padding: 10px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#ffeed7" : "#ebedf0"};
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
`;

interface CategoryBadgeProps {
  text: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isSelected?: boolean;
}

const FilterBadge: FC<CategoryBadgeProps> = ({ text, onClick, isSelected }) => {
  return (
    <StyledDiv $isSelected={isSelected} onClick={onClick}>
      {text}
    </StyledDiv>
  );
};

export default FilterBadge;
