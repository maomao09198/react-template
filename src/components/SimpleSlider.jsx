import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import "./slider-custom.css"; // We'll create this file for arrow styling

const Simpleslider = () => {
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    fetch("/sliderimage.json")
      .then((res) => res.json())
      .then((data) => setSliderImages(data))
      .catch((err) => console.error("Error fetching slider images:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container w-full max-w-screen-xl mx-auto overflow-hidden m-0 p-0">
      <Slider {...settings}>
        {sliderImages.map((sliderImage) => (
          <div key={sliderImage.id}>
            <div
              className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white p-0"
              style={{ backgroundImage: `url("${sliderImage.url}")` }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center">
                <h2 className="text-3xl font-bold">{sliderImage.title}</h2>
                <p className="text-lg mt-2">{sliderImage.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Simpleslider;
