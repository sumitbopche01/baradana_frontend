import React from "react";
import styled from "styled-components";

function BannerSection({ bannerInfo }) {
  return (
    <BannerSectionInfo>
      <BannerSectionContainer bgColor={bannerInfo.bgColor}>
        <img src={bannerInfo.imgUrl} alt="banner offers" />
        <p>{bannerInfo.title}</p>
      </BannerSectionContainer>
      {bannerInfo.discount != "" && (
        <DiscountContainer>
          <p>Enjoy {bannerInfo.discount} Discount</p>
        </DiscountContainer>
      )}
    </BannerSectionInfo>
  );
}

export default BannerSection;

const DiscountContainer = styled.div`
  margin-top: -100px;
  align-self: flex-end;
  margin-right: 25%;
  background-color: yellow;
  padding: 20px;
  font-size: 14px;
  border-radius: 5px;
  border-color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;

const BannerSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const BannerSectionContainer = styled.div`
  display: flex;
  /* background-color: ${(props) => props.bgColor}; */

  > p {
    color: #cc3f0c;
    font-size: 30px;
    align-self: center;
    margin-right: 20px;
    
  }

  > img {
    width: 35% !important;
    height: 340px !important;
    margin-left: 15% !important;
    margin-top: 2px !important;
    margin-bottom: 5px !important;
    z-index: 10 !important;
  }
`;
