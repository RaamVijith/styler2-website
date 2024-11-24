import React from "react";
import img from "../assets/banner-name-6.jpeg"

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Section */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${img})`, // Replace with your image URL
        }}
      ></div>

      {/* Content Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold text-white">
          Create your trends <br /> and life ages!
        </h1>
        <button className="mt-6 px-8 py-3 bg-gray-900 text-white hover:bg-gray-800">
          Buy Products
        </button>
      </div>

    
    </div>
  );
};

export default HeroSection;
