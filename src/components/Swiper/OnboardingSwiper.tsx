import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SwiperStyle.scss";
import { Carousel } from "react-responsive-carousel";

import Onboarding01 from "../../assets/images/Onboarding01.png";
import Onboarding02 from "../../assets/images/Onboarding02.png";
import Onboarding03 from "../../assets/images/Onboarding03.png";
import Onboarding04 from "../../assets/images/Onboarding04.png";
import Onboarding05 from "../../assets/images/Onboarding05.png";

const OnboardingSwiper: React.FC = () => {
  return (
    <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
      <div>
        <img src={Onboarding01} alt="Onboarding01"></img>
        <p>
          새로워진 스플릿은 <br />
          <b>'겹친 필기 분리'</b>로 <br />
          변경되었습니다.
        </p>
      </div>
      <div>
        <img src={Onboarding02} alt="Onboarding02"></img>
        <p>
          겹친 필기는 하단의
          <br /> 타임라인 바를 조절하여
          <br /> 내가 원하는 필기 영역을 선택해주세요.
        </p>
      </div>
      <div>
        <img src={Onboarding03} alt="Onboarding03"></img>
        <p>
          분리하기를 누르면
          <br />새 노트북으로 분리됩니다.
          <span>
            내가 속한 노트북의 복제본이 <br />
            자동으로 생성되어 이동합니다.
          </span>
        </p>
      </div>
      <div>
        <img src={Onboarding04} alt="Onboarding04"></img>
        <p>
          겹친 필기가 더 있는 경우
          <br /> 일괄적으로 이동할 지<br /> 체크를 합니다.
        </p>
      </div>
      <div>
        <img src={Onboarding05} alt="Onboarding05"></img>
        <p>
          겹친 필기가 더 있는 경우
          <br /> 일괄적으로 이동할 지<br /> 체크를 합니다.
        </p>
      </div>
    </Carousel>
  );
};

export default OnboardingSwiper;
