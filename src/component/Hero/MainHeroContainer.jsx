import React, { useRef } from "react";
import "../Hero/MainHeroContainer.css";
import { heroSlider } from "../../database/heroSliderDatabase";
import Slider from "react-slick";
import ClientSlider from "./MainHero";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

var settings = {
  className: "center",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MainHeroContainer = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = heroSlider.map((item, i) => (
    <ClientSlider item={item} key={i} />
  ));
  return (
    <div className="clients-container">
      <div className="testimonial">
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <div className="buttons-clients">
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeroContainer;
