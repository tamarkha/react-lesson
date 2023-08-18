import React from "react";
import { StyledMenu, LinkNav, Page } from "./Menu.styled";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <LinkNav
        to="/"
        onClick={() => {
          setOpen(false);
        }}
      >
        <Page>Main</Page>
      </LinkNav>
      <LinkNav
        to="/Services"
        onClick={() => {
          setOpen(false);
        }}
      >
        <Page>Services</Page>
      </LinkNav>
    </StyledMenu>
  );
};

export { Menu };
