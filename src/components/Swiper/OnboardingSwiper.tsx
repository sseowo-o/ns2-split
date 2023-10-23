import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SwiperStyle.scss";
import { Carousel } from "react-responsive-carousel";

const OnboardingSwiper: React.FC = () => {
  return (
    <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
      <div>
        <img alt="" src="http://placehold.it/320x350?text=sample" />
      </div>
      <div>
        <img alt="" src="http://placehold.it/320x350?text=sample" />
      </div>
      <div>
        <img alt="" src="http://placehold.it/320x350?text=sample" />
      </div>
      <div>
        <img alt="" src="http://placehold.it/320x350?text=sample" />
      </div>
      <div>
        <img alt="" src="http://placehold.it/320x350?text=sample" />
      </div>
      <div>
        <img alt="" src="http://placehold.it/320x350?text=sample" />
      </div>
      <div>
        <img alt="" src="http://placehold.it/320x350?text=sample" />
      </div>
      <div>
        <img alt="" src="http://placehold.it/320x350?text=sample" />
      </div>
      <div>
        <img alt="" src="http://placehold.it/320x350?text=sample" />
      </div>
    </Carousel>
  );
};

export default OnboardingSwiper;
