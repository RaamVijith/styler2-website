import React from "react";
import ImageSlider from "./ImageSliderProps";

const InstagramSlider: React.FC = () => {

  return (
    <section className="flex flex-col items-center py-28 bg-white ">
      {/* Title */}
      <h2 className="text-2xl md:text-5xl font-semibold mb-14">
        Follow On Instagram
      </h2>

    
      <ImageSlider />
    </section>
  );
};

export default InstagramSlider;
