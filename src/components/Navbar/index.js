import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

import {
  NavbarBelt,
  NavbarContainer,
  NavbarMain,
  BeltLeft,
  BeltFill,
  BeltRight,
  MainLeft,
  MainFill,
  MainRight,
} from "./NavbarElements";
import { Button } from "@material-ui/core";

function Navbar() {
  const [input, setInput] = useState("");

  return (
    <NavbarContainer>
      <NavbarBelt>
        <BeltLeft>
          <h1>Baradana</h1>
        </BeltLeft>
        <BeltFill>
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search any food item"
            />
          <Button><SearchIcon/></Button>
          </form>
        </BeltFill>
        <BeltRight></BeltRight>
      </NavbarBelt>
      <NavbarMain>
        <MainLeft></MainLeft>
        <MainFill></MainFill>
        <MainRight></MainRight>
      </NavbarMain>
    </NavbarContainer>
  );
}

export default Navbar;
