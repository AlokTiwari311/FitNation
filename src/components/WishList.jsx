import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';

const WishList = () => {
    // get from database
  const wishlist_products = [
    // fetch from database
  ];

  return (
    <div className='py-20 bg-[#F8F8F3]'>
        <div className='px-16 py-4 flex flex-col text-lg'>
            <div className='py-4 flex flex-row'>
                <Link to='/shop'>
                    <h1 className='text-gray-500'>Shop /</h1>
                </Link>
                <h1 className='px-1 font-semibold'> Whishlist</h1>
            </div>
            <div className='flex flex-row items-center py-5'>
                <span className='bg-orange-600 w-3 h-6 mr-3'></span>
                <h1 className='text-xl font-semibold text-orange-600 '>Your Wishlist</h1>
            </div>
        </div>

      <div className='px-16 flex flex-wrap justify-left gap-7'>
        {wishlist_products.map((product, index) => (
          <ProductCard key={index} product={product} products={wishlist_products}/>
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product, products }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/details" state={{product: product, products: products}}>
      <div
        className='relative p-2 bg-white shadow-md'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={product.image} alt="Product Photo" className='w-52 h-52 border border-gray-300' />
        {isHovered && (
          <button className='absolute top-44 left-2 right-2 flex items-center justify-center bg-gray-200 opacity-90 font-bold text-black h-10'>
            View Details
          </button>
        )}
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
    </Link>
  );
};

export default WishList;
