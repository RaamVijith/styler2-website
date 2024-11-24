import React from "react";

const Videobanner: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-start min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/product-name-122.jpeg')", // Replace with your image URL
      }}
    >
     

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start left-[35%] top-[20%] justify-center max-w-5xl px-6 md:px-12 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
        Make your life more precious, dresses are your identity. 
        </h1>
        <button className="px-6 py-3 mt-5 bg-orange-100 text-black text-lg  hover:bg-orange-600 transition">
          Buy Products
        </button>
      </div>
    </section>
  );
};

export default Videobanner;
