import React from "react";
import { StyledButton, StyledLinkBtn } from "./Button.styled";
const Button = ({ children, ...props }) => {
  return props.to ? (
    <StyledLinkBtn {...props}>{children}</StyledLinkBtn>
  ) : (
    <StyledButton {...props}> {children}</StyledButton>
  );
};

export default Button;
