
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s1 from "../assets/img/slider1.jpg";
import s2 from "../assets/img/slider2.jpg";

const Simpleslider = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };
   return (
     <div className="slider-container overflow-hidden">
       <Slider {...settings}>
         <div>
           <img src={s1} alt="" />
         </div>
         <div>
           <img src={s2} alt="" />
         </div>
         <div>
           <img src={s1} alt="" />
         </div>
         <div>
           <img src={s2} alt="" />
         </div>
         <div>
           <img src={s1} alt="" />
         </div>
         <div>
           <img src={s2} alt="" />
         </div>
       </Slider>
     </div>
   );

};

export default Simpleslider;