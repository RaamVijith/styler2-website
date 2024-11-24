import React from "react";

const WinterCoatsSection: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-start min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-92-2.jpeg')", // Replace with your image URL
      }}
    >
     

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center max-w-xl px-6 md:px-12 space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">
          Our winter coats <br /> have arrived!
        </h1>
        <button className="px-6 py-3 bg-orange-300 text-white text-lg  hover:bg-orange-600 transition">
          Buy Products
        </button>
      </div>
    </section>
  );
};

export default WinterCoatsSection;
