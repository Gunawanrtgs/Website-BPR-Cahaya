import React from "react";
import { useState, useEffect } from "react";
import "../Card-Testimonial/Card.css";
import { testimonial } from "../../database/testimonials";
import { sdmBerkualitas } from "../../database/sdmBerkualitas";
import { kolaborasi } from "../../database/kolaborasi";
import { kepedulian } from "../../database/kepedulian";
import { imgSlider } from "../../database/imgSliderDatabase";
import Card from "react-bootstrap/Card";

const CardTestimonial = () => {
  let initialValue = "";
  const [dataKate, setDataKate] = useState(kepedulian);
  // const [kateFilter, setKateFilter] = useState(initialValue);

  const FilterEmpatKeunggulan = (e) => {
    // if (kateFilter === "") {
    //   console.log("testimoni");
    //   console.log("sdm");
    //   console.log("kolab");
    //   console.log("kepedulian");
    // } else if (kateFilter === "testimonial") {
    //   console.log("testimoni");
    // } else if (kateFilter === "sdmBerkualitas") {
    //   console.log("sdm");
    // } else if (kateFilter === "kolaborasi") {
    //   console.log("kolab");
    // } else if (kateFilter === "kepedulian") {
    //   console.log("kepedulian");
    // }
    if (e === "Testimonial") {
      setDataKate(testimonial);
    }
  };
  const CartDock = (data) => {
    return data.map((item, index1) => {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body key={index1}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  // const EmpatKeunggulan = () => {};

  return (
    <div>
      <div>
        {imgSlider.map((item) => {
          return (
            <button
              value={item.value}
              onClick={(e) => FilterEmpatKeunggulan(e.target.value)}
            >
              {item.value}
            </button>
          );
        })}
      </div>
      {/* <p>{kateFilter}</p> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://i.ibb.co/Sy3nJZV/person-1.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      {CartDock(dataKate)}
    </div>
  );
};

export default CardTestimonial;
