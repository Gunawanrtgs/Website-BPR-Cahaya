import React from "react";
// import { IoIosQuote } from "react-icons/io";
// import { AiOutlineStar } from "react-icons/ai";
import "./MainHero.css";
import SelectorHome from "./Selector";

const MainHero = (props) => {
  const { head_text, desc, img_url } = props.item;
  return (
    <div
      className="container-client-slider"
      style={{ backgroundImage: `url(${img_url})` }}
    >
      <div className="header-client-slider">
        <h1>{head_text}</h1>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quam
          aperiam voluptatibus
        </p> */}
        <SelectorHome />
      </div>
    </div>
  );
};

export default MainHero;
