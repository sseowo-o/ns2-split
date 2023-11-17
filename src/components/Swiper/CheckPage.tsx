import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SwiperStyle.scss";
import { Carousel } from "react-responsive-carousel";

import Arrow from "../../assets/icon/after_arrow.svg";

const CheckPage: React.FC = () => {
  const totalSlides = 5;
  const [checkedSlides, setCheckedSlides] = useState<number[]>(
    Array.from({ length: totalSlides }, (_, index) => index)
  );

  const toggleSlide = (index: number) => {
    if (checkedSlides.includes(index)) {
      // 이미 체크된 슬라이드인 경우, 해제
      setCheckedSlides(checkedSlides.filter((item) => item !== index));
    } else {
      // 체크되지 않은 슬라이드인 경우, 추가
      setCheckedSlides([...checkedSlides, index]);
    }
  };

  const renderThumbs = (children: React.ReactNode[]) => {
    return children.map((child, index) => (
      <div key={index} className="thumbContainer">
        {child}
        <p className="thumbNumber">{index + 1}</p>
        <input
          className="checkbox"
          type="checkbox"
          checked={checkedSlides.includes(index)}
          onChange={() => toggleSlide(index)}
        />
      </div>
    ));
  };

  const statusFormatter = (current: number, total: number): string =>
    `${current} / ${total}`;

  return (
    <div>
      <h2>
        분리페이지 확인
        <p>2023 Planner Pro_001</p>
      </h2>
      <p className="slideLabel">
        총 <span>{checkedSlides.length}페이지</span> 선택완료
      </p>
      <Carousel
        className="checkPage"
        infiniteLoop={true}
        showThumbs={true}
        showStatus={true}
        showIndicators={false}
        renderThumbs={renderThumbs}
        statusFormatter={statusFormatter}
      >
        <ul className="pageSlide">
          <li>
            <img
              src="https://picsum.photos/id/40/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2022-11-14 17:12</p>
          </li>
          <li>
            <img src={Arrow} alt="after arrow"></img>
          </li>
          <li>
            <img
              src="https://picsum.photos/id/38/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2023-11-14 17:12</p>
          </li>
        </ul>
        <ul className="pageSlide">
          <li>
            <img
              src="https://picsum.photos/id/45/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2022-11-14 17:12</p>
          </li>
          <li>
            <img src={Arrow} alt="after arrow"></img>
          </li>
          <li>
            <img
              src="https://picsum.photos/id/53/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2022-11-14 17:12</p>
          </li>
        </ul>
        <ul className="pageSlide">
          <li>
            <img
              src="https://picsum.photos/id/62/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2022-11-14 17:12</p>
          </li>
          <li>
            <img src={Arrow} alt="after arrow"></img>
          </li>
          <li>
            <img
              src="https://picsum.photos/id/65/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2022-11-14 17:12</p>
          </li>
        </ul>
        <ul className="pageSlide">
          <li>
            <img
              src="https://picsum.photos/id/90/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2022-11-14 17:12</p>
          </li>
          <li>
            <img src={Arrow} alt="after arrow"></img>
          </li>
          <li>
            <img
              src="https://picsum.photos/id/94/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2022-11-14 17:12</p>
          </li>
        </ul>
        <ul className="pageSlide">
          <li>
            <img
              src="https://picsum.photos/id/103/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2022-11-14 17:12</p>
          </li>
          <li>
            <img src={Arrow} alt="after arrow"></img>
          </li>
          <li>
            <img
              src="https://picsum.photos/id/112/300/500"
              alt="Thumbnail1"
            ></img>
            <p className="date">2022-11-14 17:12</p>
          </li>
        </ul>
      </Carousel>
    </div>
  );
};

export default CheckPage;
