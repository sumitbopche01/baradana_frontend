import React from "react";
import styled from "styled-components";

function BannerSection({ bannerInfo }) {
  return (
    <BannerSectionContainer bgColor={bannerInfo.bgColor}>
      <img src={bannerInfo.imgUrl} alt="banner offers" />
      <p>{bannerInfo.title}</p>
    </BannerSectionContainer>
  );
}

export default BannerSection;

const BannerSectionContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.bgColor};

  > img {
    width: 35% !important;
    height: 340px !important;
    margin-left: 15% !important;
    margin-top: 2px !important;
    margin-bottom: 5px !important;
    z-index: 10 !important;
  }
`;
