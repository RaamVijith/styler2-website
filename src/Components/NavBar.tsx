import React, { useState, useEffect } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { FiHeart, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isProductDropdown, setIsProductDropdown] = useState(false);
  const [isTemplatesDropdownOpen, setIsTemplatesDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMegaDropdownOpen, setIsMegaDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === "shop") {
      setIsShopDropdownOpen(!isShopDropdownOpen);
    } else if (dropdown === "templates") {
      setIsTemplatesDropdownOpen(!isTemplatesDropdownOpen);
    } else if (dropdown === "product") {
      setIsProductDropdown(!isProductDropdown);
    } else if (dropdown === "pages") {
      setIsPagesDropdownOpen(!isPagesDropdownOpen);
    } else if (dropdown === "mega") {
      setIsMegaDropdownOpen(!isMegaDropdownOpen);
    }
  };

  const closeDropdown = () => {
    setIsShopDropdownOpen(false);
    setIsTemplatesDropdownOpen(false);
    setIsProductDropdown(false);
    setIsPagesDropdownOpen(false);
    setIsMegaDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dynamic navbar styles
  const navbarStyle = {
    backgroundColor: isScrolled || isHovered ? "white" : "transparent",
    transition: "all 0.3s ease-in-out",
  };

  // Dynamic text styles
  const textStyle = isScrolled || isHovered ? "text-gray-800" : "text-white";

  return (
    <nav
      className="fixed top-0 left-0 right-0 px-[3vw] w-full h-[100px] z-[100] transition-all duration-300"
      style={navbarStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center w-full h-full z-[100]">
        {/* Logo */}
        <div
          className={`text-[32px] font-bold opacity-95 ${textStyle} z-10 transition-colors duration-300`}
        >
          STYLER
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`text-2xl ${textStyle}`}
          >
            {isMobileMenuOpen ? "✖️" : "☰"}
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`flex flex-row gap-5 items-center z-[100] ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          {/* SHOP Dropdown */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => toggleDropdown("shop")}
            onMouseLeave={closeDropdown}
          >
            <div
              className={`flex flex-row items-center hover:text-[#C96868] text-lg font-semibold opacity-95 ${textStyle} transition-colors duration-300`}
            >
              <span>SHOP</span>
              <FaAngleDown />
            </div>
            {isShopDropdownOpen && (
              <div className="absolute -left-[40vw] mt-8 border-t-2 w-[110vw] px-[10vw] py-[3vw] rounded-xl bg-white shadow-xl grid grid-cols-5 gap-6 animate-fade-slide">
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    CATALOG
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Style 1</li>
                    <li>Style 2</li>
                    <li>Style 3</li>
                    <li>Style 4</li>
                    <li>Style 5</li>
                    <li>Style 6</li>
                    <li>Load More</li>
                    <li>Load More</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    SHOP LAYOUTS
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Default</li>
                    <li>Left Sidebar</li>
                    <li>Right Sidebar</li>
                    <li>Masonry Grid</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    SHOP COLUMNS
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>List Type</li>
                    <li>Column Three</li>
                    <li>Column Four</li>
                    <li>Column Five</li>
                    <li>List Type</li>
                    <li>Column Three</li>
                    <li>Column Four</li>
                    <li>Column Five</li>
                    <li>List Type</li>
                    <li>Column Three</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    HERO TYPES
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    HERO TYPES
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => toggleDropdown("product")}
            onMouseLeave={closeDropdown}
          >
            <div
              className={`flex flex-row items-center hover:text-[#C96868] text-lg font-semibold opacity-95 ${textStyle} transition-colors duration-300`}
            >
              <span>PRODUCT</span>
              <FaAngleDown />
            </div>

            {isProductDropdown && (
              <div className="absolute -left-[45vw] mt-8 border-t-2 w-[110vw] px-[10vw] py-[3vw] rounded-xl bg-white shadow-xl grid grid-cols-5 gap-6 animate-fade-slide">
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    CATALOG
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Style 1</li>
                    <li>Style 2</li>
                    <li>Style 3</li>
                    <li>Style 4</li>
                    <li>Style 5</li>
                    <li>Style 6</li>
                    <li>Load More</li>
                    <li>Load More</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    SHOP LAYOUTS
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Default</li>
                    <li>Left Sidebar</li>
                    <li>Right Sidebar</li>
                    <li>Masonry Grid</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    SHOP COLUMNS
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>List Type</li>
                    <li>Column Three</li>
                    <li>Column Four</li>
                    <li>Column Five</li>
                    <li>List Type</li>
                    <li>Column Three</li>
                    <li>Column Four</li>
                    <li>Column Five</li>
                    <li>List Type</li>
                    <li>Column Three</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    HERO TYPES
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    HERO TYPES
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                    <li>Category List</li>
                    <li>Category Slider</li>
                    <li>Hero Small</li>
                    <li>Shop No Title</li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* TEMPLATES Dropdown */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => toggleDropdown("templates")}
            onMouseLeave={closeDropdown}
          >
            <div
              className={`flex flex-row items-center hover:text-[#C96868] text-lg font-semibold opacity-95 ${textStyle} transition-colors duration-300`}
            >
              <span>TEMPLATES</span>
              <FaAngleDown />
            </div>
            {isTemplatesDropdownOpen && (
              <div className="absolute left-0 border-t-2 w-[20vw] p-[3vw] mt-8 rounded-xl bg-white shadow-xl flex animate-fade-slide">
                <div>
                  <h4 className="font-bold text-xl text-gray-700 mb-5">
                    HEADER STYLES
                  </h4>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Header Sidebar Shop</li>
                    <li>Sidebar Header Shop Dark</li>
                    <li>Header Sidebar Right</li>
                    <li>Header Sidebar Dark</li>
                    <li>Light Styles</li>
                    <li>Dark Styles</li>
                    <li>Transparent Styles</li>
                    <li>Topbars / Footers</li>
                    <li>Light Styles</li>
                    <li>Dark Styles</li>
                    <li>Transparent Styles</li>
                    <li>Topbars / Footers</li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => toggleDropdown("pages")}
            onMouseLeave={closeDropdown}
          >
            <div
              className={`flex flex-row items-center hover:text-[#C96868] text-lg font-semibold opacity-95 ${textStyle} transition-colors duration-300`}
            >
              <span>PAGES</span>
              <FaAngleDown />
            </div>
            {isPagesDropdownOpen && (
              <div className="absolute left-0 border-t-2 w-[20vw] p-[3vw] mt-8 rounded-xl bg-white shadow-xl flex animate-fade-slide">
                <div>
                  <ul className="space-y-2 text-[#7d7d7d] text-lg">
                    <li>Header Sidebar Shop</li>
                    <li>Sidebar Header Shop Dark</li>
                    <li>Header Sidebar Right</li>
                    <li>Header Sidebar Dark</li>
                    <li>Light Styles</li>
                    <li>Dark Styles</li>
                    <li>Transparent Styles</li>
                    <li>Topbars / Footers</li>
                    <li>Light Styles</li>
                    <li>Dark Styles</li>
                    <li>Transparent Styles</li>
                    <li>Topbars / Footers</li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => toggleDropdown("mega")}
            onMouseLeave={closeDropdown}
          >
            <div
              className={`flex flex-row items-center hover:text-[#C96868] text-lg font-semibold opacity-95 ${textStyle} transition-colors duration-300`}
            >
              <span>MEGA</span>
              <FaAngleDown />
            </div>
            {isMegaDropdownOpen && (
              <div className="absolute -left-[10vw] transform -translate-x-1/2 mt-8 border-t-2 w-[110vw] py-[3vw] rounded-xl bg-white shadow-xl flex">
                {/* Category Sections */}
                <div className="flex-1 mr-8 pl-[15vw]">
                  {/* First Column */}
                  <div>
                    <h4 className="font-bold text-2xl text-gray-700 mb-5 whitespace-nowrap">
                      All Categories
                    </h4>
                    <ul className="space-y-2 text-[#7d7d7d] text-lg">
                      <li>Children</li>
                      <li>Boys</li>
                      <li>Girls</li>
                      <li>Women</li>
                      <li>Men</li>
                      <li>Accessory</li>
                      <li>Shoes</li>
                      <li className="text-white bg-black px-10 py-3 mt-4 font-semibold cursor-pointer whitespace-nowrap">
                        All Products ➔
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="flex-1 grid grid-cols-4 gap-4">
                  <img
                    src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg"
                    alt="Product 1"
                    className="rounded-md"
                  />
                  <img
                    src="/image2.jpg"
                    alt="Product 2"
                    className="rounded-md"
                  />
                  <img
                    src="/image3.jpg"
                    alt="Product 3"
                    className="rounded-md"
                  />
                  <img
                    src="/image4.jpg"
                    alt="Product 4"
                    className="rounded-md"
                  />
                </div> */}
                {/* Grid of Categories */}
                <div className="col-span-4 grid grid-cols-6 gap-4 px-[10vw]">
                  <div className="text-center">
                    <img
                    src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg"
                    alt="Women"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">WOMEN</p>
                  </div>
                  <div className="text-center">
                    <img
                    src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/product-name-9-300x300.jpeg"
                    alt="Men"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">MEN</p>
                  </div>
                  <div className="text-center">
                    <img
                    src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-128-300x300.jpeg"
                    alt="Basics"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">BASICS</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-128-300x300.jpeg"
                      alt="T-Shirts"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">T-SHIRTS</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-2-300x300.jpeg"
                      alt="Sweaters 1"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">SWEATERS</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-2-300x300.jpeg"
                      alt="Sweaters 2"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">SWEATERS</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/product-name-130-300x300.jpeg"
                      alt="Denim 1"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">DENIM</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-79-300x300.jpeg"
                      alt="Denim 2"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">DENIM</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-79-300x300.jpeg"
                      alt="Skirts"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">SKIRTS</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/product-name-3-300x300.jpeg"
                      alt="Shirts"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">SHIRTS</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/product-name-3-300x300.jpeg"
                      alt="Underwear"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">UNDERWEAR</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-110-300x300.jpeg"
                      alt="Swimwear"
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">SWIMWEAR</p>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Search & Icons */}
        <div className="hidden md:flex space-x-1 items-center">
          <button
            className={`p-2 font-semibold opacity-95 z-10 ${textStyle} transition-colors duration-300`}
          >
            <FiSearch size={28} />
          </button>
          <button
            className={`p-2 font-semibold opacity-95 z-10 ${textStyle} transition-colors duration-300`}
          >
            <FiShoppingBag size={28} />
          </button>
          <button
            className={`p-2 font-semibold opacity-95 z-10 ${textStyle} transition-colors duration-300`}
          >
            <FiHeart size={28} />
          </button>
          <button
            className={`p-2 font-semibold opacity-95 z-10 ${textStyle} transition-colors duration-300`}
          >
            <CgShoppingCart size={28} />
          </button>
          <button
            className={`p-2 font-semibold opacity-95 z-10 ${textStyle} transition-colors duration-300`}
          >
            <FiUser size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
