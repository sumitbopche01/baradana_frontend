import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  font-size: 14px;
  color: white;
  position: relative;
`;

export const NavbarBelt = styled.div`
  background-color: #131921;
  height: 60px;
  z-index: 5;
  display: flex;
`;

export const NavbarMain = styled.div`
  background-color: #232f3e;
  height: 39px;
  padding-top: 0;
  z-index: 4;
`;

export const BeltLeft = styled.div`
  align-items: center;
  padding-top: 13px;
  padding-left: 15px;
`;

export const BeltFill = styled.div`
  display: flex;
  width: 60%;
  margin-left: 80px;
  margin-top: -2px;
  
  > form {
    display: flex;
    height: 50px;
    margin-top: 5px;
    width: 100%;
    /* justify-content: center; */
  }
  > form > input {
    width: 100%;
    border-radius: 3px;
    padding: 10px;
    outline: none;
    text-align:center;
    font-size: 18px;
    font-weight: 600;
  }

  > form > button {
    background-color: orange;
    margin-top: 2.1px;
    margin-bottom: 1px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-left: 0;
    outline: none;

    :hover {
      color: white;
      background-color: darkmagenta;
    }
  }

  > form > button > .MuiSvgIcon-root {
    margin-right: 20px;
    background-color: green;
  }
`;

export const BeltRight = styled.div``;

export const MainLeft = styled.div``;

export const MainFill = styled.div``;

export const MainRight = styled.div``;
