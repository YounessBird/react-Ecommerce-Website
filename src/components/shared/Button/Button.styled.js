import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const baseBtnStyles = css`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467fB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "17px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#0467fB" : "#4B59F7")};
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
    width: 80%;
    margin: 1rem;
  }
`;

export const StyledButton = styled.button`
  ${baseBtnStyles}
`;

export const StyledLinkBtn = styled(Link)`
  ${baseBtnStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none;
  /* this is to control the width of the Link*/
  width: fit-content;
`;
