import type CSSType from "csstype";
import styled from "styled-components";

interface FlexBoxProps {
  $flexDirection?: CSSType.Properties["flexDirection"];
  $alignItems?: CSSType.Properties["alignItems"];
  $justifyContent?: CSSType.Properties["justifyContent"];
  $gap?: CSSType.Properties["gap"];
  $marginBottom?: string;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? "row"};
  align-items: ${({ $alignItems }) => $alignItems ?? "normal"};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? "normal"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom ?? 0};
  gap: ${({ $gap }) => $gap ?? 0};
`;

export default FlexBox;
