import React from 'react';
import { Star } from 'lucide-react';
import img from '../assets/slide-name-2-scaled.jpg'

interface Product {
  id: number;
  name: string;
  price: number | { min: number; max: number };
  rating: number;
  image: string;
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
    <div className="group w-full">
      <div className="relative">
        <div className="aspect-square w-full overflow-hidden rounded-sm bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
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
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-sm text-gray-900">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">{renderPrice()}</p>
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
      price: 144.00,
      rating: 5,
      image: 'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-2-300x300.jpeg',
    },
    {
      id: 2,
      name: 'The Oversized Alpaca Crew',
      price: { min: 18.00, max: 32.00 },
      rating: 4,
      image: 'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-34-300x300.jpeg',
      label: { text: 'SALE!', type: 'sale' },
    },
    {
      id: 3,
      name: 'Green Oversized Crew',
      price: 34.00,
      rating: 5,
      image: 'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-58-300x300.jpeg',
      label: { text: 'WINTER', type: 'winter' },
    },
    {
      id: 4,
      name: 'The Blue Chunky Beanie',
      price: 21.00,
      rating: 5,
      image: 'https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-10-300x300.jpeg',
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
        <div className="overflow-y-auto h-[80vh] items-center justify-center pt-[15%]">
          <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                <span className="border-b-2 border-gray-900">Featured</span> products of the week
              </h2>
              <p className="mt-4 text-gray-600">
                Create your own style and spread your energy, the community will reward you!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
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