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
  z-index: 4;
  display: flex;
  align-items: center;
  padding-left: 5px;
  font-size: 18px;

  > p {
    padding-left: 15px;

    :hover {
      cursor: pointer;
      transform: scale(1.2);
      color: #99d98c;
    }
  }
`;

export const BeltLeft = styled.div`
  align-items: center;
  padding-top: 13px;
  padding-left: 15px;
`;

export const BeltFill = styled.div`
  display: flex;
  align-items: baseline;
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
    text-align: center;
    font-size: 18px;
    font-weight: 400;
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

export const NavTools = styled.div`
  display: flex;
  margin-left: 80px;
  justify-content: flex-end;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;

  > .MuiSvgIcon-root {
    margin-left: 0px;

    :hover {
      background-color: orange;
    }
  }
`;

export const Cart = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 60px;
`;

// export const LoggedInUser = styled.div`
//   padding-top: 13px;
//   font-size: 18px;
//   margin-top: 2.1px;
//   margin-left: 15px;
// `;
