import React from "react";
import { BannerContainer } from "./BannerElements";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BannerData } from "../../data/bannerList";
import BannerSection from "./BannerSection";

function Poster() {
  return (
    <BannerContainer>
      <Carousel
        autoPlay={true}
        dynamicHeight={false}
        showThumbs={false}
        interval={3000}
        infiniteLoop={true}
      >
        {BannerData.map((banner) => (
          <BannerSection key={banner.id} bannerInfo={banner} />
        ))}
      </Carousel>
    </BannerContainer>
  );
}

export default Poster;
