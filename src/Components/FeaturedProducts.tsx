import React, { useState } from 'react';
import { Star, Eye, RefreshCcw, Heart } from 'lucide-react';
import img from '../assets/slide-name-2-scaled.jpg'

interface Product {
  id: number;
  name: string;
  price: number | { min: number; max: number };
  rating: number;
  image: string;
  hoverImage?: string;
  label?: {
    text: string;
    type: 'sale' | 'winter' | 'best';
  };
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={14}
          className={`${
            index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNameHovered, setIsNameHovered] = useState(false);

  const renderPrice = () => {
    if (typeof product.price === 'number') {
      return <span>${product.price.toFixed(2)}</span>;
    } else {
      return (
        <span>${product.price.min.toFixed(2)} – ${product.price.max.toFixed(2)}</span>
      );
    }
  };

  const getLabelStyle = (type: string) => {
    switch (type) {
      case 'sale':
        return 'bg-gray-800 text-white';
      case 'winter':
        return 'bg-orange-400 text-white';
      case 'best':
        return 'bg-orange-400 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div
      className="group w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square w-full  overflow-hidden rounded-sm bg-gray-100 relative">
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-105"
          />
          {product.label && (
            <span
              className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold ${getLabelStyle(
                product.label.type
              )}`}
            >
              {product.label.text}
            </span>
          )}

          {/* Icons on Hover */}
          {isHovered && (
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300">
                <Eye size={16} />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300">
                <RefreshCcw size={16} />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300">
                <Heart size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4 space-y-1">
        {/* Product Name */}
        <h3
          className="text-lg font-semibold text-gray-900 cursor-pointer transition-all duration-300"
          onMouseEnter={() => setIsNameHovered(true)}
          onMouseLeave={() => setIsNameHovered(false)}
        >
          {isNameHovered ? 'Add to Cart' : product.name}
        </h3>
        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-900">{renderPrice()}</p>
          <RatingStars rating={product.rating} />
        </div>
      </div>
    </div>
  );
};

const FeaturedSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'The Gradient Alpaca Crew',
      price: 144.0,
      rating: 5,
      image:
        'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-2-300x300.jpeg',
      hoverImage:
        'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-3-300x300.jpeg',
    },
    {
      id: 2,
      name: 'The Oversized Alpaca Crew',
      price: { min: 18.0, max: 32.0 },
      rating: 4,
      image:
        'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-34-300x300.jpeg',
      hoverImage:
        'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-35-300x300.jpeg',
      label: { text: 'SALE!', type: 'sale' },
    },
    {
      id: 3,
      name: 'Green Oversized Crew',
      price: 34.0,
      rating: 5,
      image:
        'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-58-300x300.jpeg',
      hoverImage:
        'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-59-300x300.jpeg',
      label: { text: 'WINTER', type: 'winter' },
    },
    {
      id: 4,
      name: 'The Blue Chunky Beanie',
      price: 21.0,
      rating: 5,
      image:
        'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-10-300x300.jpeg',
      hoverImage:
        'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-11-300x300.jpeg',
      label: { text: 'BEST', type: 'best' },
    },
  ];

  return (
    <div className="relative h-[85vh] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Side - Fixed Image */}
        <div className="relative hidden lg:block">
          <div className="sticky top-0 h-screen">
            <img
              src={img}
              alt="Featured Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Scrollable Products */}
        <div className="overflow-y-auto h-[80vh] items-center justify-center pt-[10%]">
          <div className="max-w-3xl mx-auto px-4 py-16">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">
                <span className="border-b-2 border-gray-900">Featured</span> products of the week
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Create your own style and spread your energy, the community will reward you!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
