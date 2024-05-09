import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';

const AllProducts = () => {
  const location = useLocation();
  const products = location.state ? location.state.products : [];

  let filteredProducts = [];

  if (location.state.attribute) {
    filteredProducts = products.filter(product => product.attribute === location.state.attribute);
  } else if (location.state.category) {
    filteredProducts = products.filter(product => product.category === location.state.category);
  } else {
    filteredProducts = products;
  }

  return (
    <div className='py-20 bg-[#F8F8F3]'>
      {location.state?.category && (
        <div className='px-16 py-4 flex flex-col text-lg'>
          <div className='flex flex-row items-center'>
            <span className='bg-orange-600 w-3 h-6 mr-3'></span>
            <h1 className='text-xl font-semibold text-orange-600 '>Categories</h1>
          </div>
          <div className='py-4 flex flex-row'>
          <Link to='/shop'>
            <h1 className='text-gray-500'>Shop /</h1>
          </Link>
          <h1 className='px-1 font-semibold'>{location.state.category}</h1>
          </div>
        </div>
      )}

      {location.state?.attribute && (
        <div className='px-16 py-4'>
          <div className='p-1 flex flex-row items-center'>
            <span className='bg-orange-600 w-3 h-6 mr-3'></span>
            <h1 className='text-xl font-semibold text-orange-600 '>This Month</h1>
          </div>
        <h1 className='py-2  text-3xl font-bold text-black '>Best Selling Products</h1>
        </div>
      )}

      {!location.state?.category && !location.state?.attribute && (
      <div className='px-16 py-4'>
        <div className='p-1 flex flex-row items-center'>
          <span className='bg-orange-600 w-3 h-6 mr-3'></span>
          <h1 className='text-xl font-semibold text-orange-600 '>Our Products</h1>
        </div>
        <h1 className='py-2 text-3xl font-bold text-black '>Explore Our Products</h1>
      </div> 
      )} 

      <div className='px-16 flex flex-wrap justify-left gap-7'>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative p-2 bg-white shadow-md'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.image} alt="Product Photo" className='w-52 h-52 border border-gray-300' />
      {isHovered && (
        <button className='absolute top-44 left-2 right-2 flex items-center justify-center bg-gray-200 opacity-90 font-bold text-black h-10'>
          Add to Cart
        </button>
      )}
      <button className='absolute top-4 right-4 flex items-center justify-center bg-gray-100 rounded-full w-8 h-8'>
        <AiOutlineHeart className='text-red-500' />
      </button>
      <div className='p-2'>
        <h1 className='font-bold'>{product.title}</h1>
        <h1 className='text-sm text-gray-500'>{product.category}</h1>
        <div className='flex items-center mt-2 gap-1'>
          <h1 className='font-bold text-md'>Rs.{product.currentPrice}</h1>
          <h1 className='text-xs text-gray-400 line-through'>Rs.{product.originalPrice}</h1>
          <h1 className='text-xs text-orange-400'>(Rs.{product.originalPrice - product.currentPrice} OFF)</h1>
        </div>
        <div className='flex items-center py-2'>
          {[...Array(5)].map((_, index) => (
            <h1 key={index} className='text-md text-yellow-400'><AiFillStar /></h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
