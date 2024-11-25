import React, { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ImageSlider: React.FC = () => {
    const images = [
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2022/02/accesories-full-8-300x200.jpg", // Replace with actual image URLs
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/slide-name-7-300x199.jpg",
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/slide-name-8-300x187.jpg",
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/personal-img-13-300x200.jpg",
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2022/02/accesories-full-1-300x200.jpg",
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2022/02/accesories-full-7-300x200.jpg",
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/slide-name-8-300x187.jpg",
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/personal-img-13-300x200.jpg",
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2022/02/accesories-full-1-300x200.jpg",
        "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2022/02/accesories-full-7-300x200.jpg",
      ];

  const sliderRef = useRef<HTMLDivElement>(null);

  // Scroll functions
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -600, behavior: "smooth" }); // Scroll by 6 image widths
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 600, behavior: "smooth" }); // Scroll by 6 image widths
    }
  };

  return (
    <div className="w-full mx-auto p-4">

      {/* Slider Container */}
      <div className="relative w-full mx-auto overflow-hidden">
        {/* Images Wrapper */}
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll space-x-4 scrollbar-hide scroll-smooth"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group flex-none overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Instagram Icon */}
              <div className="absolute top-2 left-2  text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                
                <img src="https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid" className="w-10 h-10 rounded-md" /> 
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={slideLeft}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-gray-100 opacity-25 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <SlArrowLeft className="w-10 h-10 text-black" />
        </button>

        {/* Right Button */}
        <button
          onClick={slideRight}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-gray-100 opacity-25 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <SlArrowRight className="w-10 h-10 text-black" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
