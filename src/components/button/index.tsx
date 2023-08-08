/* eslint-disable react/display-name */
import { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #413e4f;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #2d2b37;
  }
  &:disabled {
    background-color: #bdbdd0;
    cursor: not-allowed;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, ...props }, ref) => (
    <StyledButton ref={ref} {...props}>
      {text}
    </StyledButton>
  )
);

export default Button;
