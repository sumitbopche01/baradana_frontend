import styled from "styled-components";

export const DataContainer = styled.div`
  color: white;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  overflow: auto hidden;
  /* overflow-x: auto; */
  scroll-behavior: smooth;
  // Hide scrollbar in diff browsers
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  > p {
    font-size: 18px;
    letter-spacing: 1px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 7px 16px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  line-height: 25px;

  :hover {
    box-shadow: 1px 2px 10px #9c7070;
    z-index: 10;
    transform: scale(1.01);
  }

  > button {
    color: white;
    font-size: 14px;
    background-color: green;
    font-weight: 600;
    text-align: center;
    width: 100%;
    border: 0;
    line-height: 40px;
    border-radius: 2px;

    :hover {
      background-color: orange;
      color: black;
    }
  }
`;

export const ProductImg = styled.div`
  /* padding-top: 10px;
  padding-bottom: 40px; */
  padding: 10px;
  overflow: hidden;
  height: 162px;
  text-align: center;
  box-sizing: border-box;

  > img {
    height: 100%;
    width: auto;
    vertical-align: middle;
  }

  :hover {
    transform: translate(0px, -5px);
  }
`;

export const Heading = styled.div`
  color: white;
  margin-top: 5px;

  > hr {
    margin-bottom: 8px;
    border: 0;
    height: 2px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
`;

export const CategoryContainer = styled.div``;

export const ProductTitle = styled.p`
  font-weight: 600;
  padding: 10px;
`;

export const ProductPrice = styled.span`
  padding-left: 10px;
  color: gray;
`;

export const ProductUnits = styled.span`
  padding-left: 10px;
  color: gray;
`;
