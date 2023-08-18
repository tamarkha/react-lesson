import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Container = styled.div`
  width: 90%;
  margin: auto;
`;
export const NavHeader = styled.div`
  margin-top: 15px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  z-index: 9;

  @media screen and (max-width: 1008px) {
    position: relative;
    display: flex;
    justify-content: center;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  padding-bottom: 10px;
  text-decoration: none;
  height: 100% auto;
  cursor: pointer;
  width: 100px;
  justify-content: center;
  font-size: 11px;

  &.active {
    border-bottom: 2px solid #2b8a44;
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  justify-content: start;
  height: 100%;
  cursor: pointer;
  width: 200px;
  font-size: 11px;
  h1 {
    text-align: left;
  }
  img {
    width: 60px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;

  @media screen and (max-width: 1008px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    margin-top: 15px;
    position: fixed;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1008px) {
    display: none;
  }
`;
