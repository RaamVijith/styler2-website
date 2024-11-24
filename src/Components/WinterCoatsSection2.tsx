import React from "react";

const WinterCoatsSection2: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-start min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-19.jpeg')", // Replace with your image URL
      }}
    >
     

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center max-w-xl px-6 md:px-12 space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">
        Spread positive  <br /> energy with Blue!
        </h1>
        <p className="text-lg text-gray-500">Create your own style and spread your energy,
        the community will reward you!</p>
        <button className="px-10 py-3 bg-orange-100 text-gray-800 text-lg  hover:bg-orange-600 transition">
          Buy Products
        </button>
      </div>
    </section>
  );
};

export default WinterCoatsSection2;
