import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
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
  NavTools,
  Cart,
} from "./NavbarElements";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
              placeholder="Search for products, brands and more"
            />
            <Button>
              <SearchIcon />
            </Button>
          </form>
        </BeltFill>
        <BeltRight>
          <NavTools>
            <p>Sumit</p>
            <ExpandMoreOutlinedIcon />
            <Cart>
              <ShoppingCartIcon />
              <p>Cart</p>
            </Cart>
          </NavTools>
        </BeltRight>
      </NavbarBelt>
      <NavbarMain>
        <p>VEGETABLES</p>
        <p>FRUITS</p>
        <p>GROCERIES</p>
        <p>DAIRY</p>
        <p>SPICES</p>
      </NavbarMain>
    </NavbarContainer>
  );
}

export default Navbar;
