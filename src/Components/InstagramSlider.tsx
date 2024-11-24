import React, { useState } from "react";

const InstagramSlider: React.FC = () => {
  const images = [
    "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2022/02/accesories-full-8-300x200.jpg", // Replace with actual image URLs
    "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/slide-name-7-300x199.jpg",
    "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/slide-name-8-300x187.jpg",
    "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/personal-img-13-300x200.jpg",
    "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2022/02/accesories-full-1-300x200.jpg",
    "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2022/02/accesories-full-7-300x200.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="flex flex-col items-center py-28 bg-white ">
      {/* Title */}
      <h2 className="text-2xl md:text-5xl font-semibold mb-14">
        Follow On Instagram
      </h2>

      {/* Image Slider */}
      <div className="relative w-full ">
        {/* Images */}
        <div className="flex overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Instagram ${index + 1}`}
              className={`w-1/6 h-[10%]  object-cover rounded-md transition-transform duration-500 ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-90"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default InstagramSlider;
