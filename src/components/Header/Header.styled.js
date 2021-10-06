import styled from "styled-components";
import { Container } from "../shared/Container";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";
import { Button } from "../shared";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.header};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
`;
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: block;

    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    top: 80px;
    position: absolute;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.colors.header};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and(max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    &:hover {
      border: none;
    }
  } ;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  } ;
`;
