import React, { useState } from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import "../EmpatKeunggulan/EmpatKeunggulan.css";
import { imgSlider } from "../../database/imgSliderDatabase";

import {
  SdmBerkualitas,
  Kolaborasi,
  Kepedulian,
  Testimonial,
  Promosi,
} from "../../database/sdmBerkualitas";

const EmpatKeunggulan = () => {
  // state data
  const [valueDoc, setValueDoc] = useState("Testimonial");
  const [valuDesDoc, setValueDesDoc] = useState(Testimonial);

  // cart dock
  const CardDoc = () => {
    if (valueDoc === "Testimonial") {
      return Testimonial.map((item, ind) => {
        return (
          <Card
            style={{ maxWidth: "25rem" }}
            key={ind}
            className="cart-keunggulans"
          >
            <Card.Img className="img-keunggulan" variant="top" src={item.img} />

            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        );
      });
    } else if (valueDoc === "Kepedulian") {
      return Kepedulian.map((item, ind) => {
        return (
          <Card
            style={{ maxWidth: "25rem" }}
            key={ind}
            className="cart-keunggulans"
          >
            <Card.Img className="img-keunggulan" variant="top" src={item.img} />

            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        );
      });
    } else if (valueDoc === "SDM Berkualitas") {
      return SdmBerkualitas.map((item, ind) => {
        return (
          <Card
            style={{ maxWidth: "25rem" }}
            key={ind}
            className="cart-keunggulans"
          >
            <Card.Img className="img-keunggulan" variant="top" src={item.img} />

            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        );
      });
    } else if (valueDoc === "Kolaborasi") {
      return Kolaborasi.map((item, ind) => {
        return (
          <Card
            style={{ maxWidth: "25rem" }}
            key={ind}
            className="cart-keunggulans"
          >
            <Card.Img className="img-keunggulan" variant="top" src={item.img} />

            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        );
      });
    } else if (valueDoc === "Promosi") {
      return Promosi.map((item, ind) => {
        return (
          <Card
            style={{ maxWidth: "25rem" }}
            key={ind}
            className="cart-keunggulans"
          >
            <Card.Img className="img-keunggulan" variant="top" src={item.img} />

            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        );
      });
    }
  };

  // show item keunggulan
  const ShowDoc = (kate) => {
    if (kate === "Testimonial") {
      setValueDesDoc(Testimonial);
    } else if (kate === "Kepedulian") {
      setValueDoc(Kepedulian);
    } else if (kate === "SDM Berkualitas") {
      setValueDoc(SdmBerkualitas);
    } else if (kate === "Kolaborasi") {
      setValueDesDoc(Kolaborasi);
    }
    setValueDoc(kate);
    console.log(kate);
    console.log(valueDoc);
    console.log(valuDesDoc);
  };

  const sliderProject = () => {
    return imgSlider.map((item, i) => (
      <div className="container-project" key={i}>
        <img src={item.img} alt="project" />
        <div className="disc">
          <h1>{item.value}</h1>
          <p>
            {item.disc}
            <br />
            <Button
              className="btn-empatKeunggulan"
              variant="outline-danger"
              size="sm"
              value={item.value}
              onClick={(e) => ShowDoc(e.target.value)}
            >
              Selengkapnya
            </Button>{" "}
          </p>
        </div>
      </div>
    ));
  };

  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  return (
    <div>
      <div className="container-projects">
        <h1 className="title">
          Bank Sembada Hadir Sebagai Bank Komunitas Pilihan
        </h1>
        <div className="slide">
          <Slider {...settings}>{sliderProject()}</Slider>
        </div>
      </div>
      <div className="cont-cart-keunggulan">
        <h2>{valueDoc}</h2>
        <div className="cont-showCart">{CardDoc()}</div>
      </div>
    </div>
  );
};

export default EmpatKeunggulan;
