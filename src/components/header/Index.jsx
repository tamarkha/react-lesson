import React, { useState } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavHeader,
  NavLogo,
  Links,
  Container,
} from "./HeaderStyles";
import { Burger } from "./burger/Burger";
import { Menu } from "./menu/Menu";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <Container>
      <NavHeader>
        <Nav>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <NavMenu>
            <div>
              <NavLogo to="/">
                <h1>
                  <img src="/imgs/companyLogo.png" alt="image" />
                </h1>
              </NavLogo>
            </div>
            <Links>
              <NavLink to="/">
                <h1>Main</h1>
              </NavLink>
              <NavLink to="/Services">
                <h1>Services</h1>
              </NavLink>
            </Links>
          </NavMenu>
        </Nav>
      </NavHeader>
    </Container>
  );
};

export default Header;
