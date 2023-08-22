// import React from 'react'
// import Slider from 'react-slick';
// import Project from './Project';
// import { imgSlider } from '../../database/imgSliderDatabase';

// const SliderComp = () => {

//     let sliderProject ="";
//     sliderProject = imgSlider.map((item, i)=>(
//         <Project item = {item} key={i}/>
//     ))

//     var settings = {
//         className: "center",
//         centerMode: true,
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//               infinite: true,
//               dots: false
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//   return (
//     <Slider {...settings}>
//         {sliderProject}
//     </Slider>
//   )
// }

// export default SliderComp