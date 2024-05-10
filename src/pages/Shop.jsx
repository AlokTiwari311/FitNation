import React, { useState, useEffect } from 'react';
import { AiFillStar, AiOutlineCustomerService, AiOutlineHeart, AiOutlineSafetyCertificate, AiOutlineShoppingCart, AiOutlineTruck } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import Veg from "../assets/WestIndia.jpeg"

const Shop = () => {
  const [currentBanner, setCurrentBanner] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 3 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Assuming you fetch products here and set them using setProducts
    // Simulating fetching products with a delay
    const fetchData = async () => {
      // Simulating fetch delay
      setTimeout(() => {
        // fetch from database
        const fetchedProducts = [
          // fetch from database
        ];
        setProducts(fetchedProducts);
      }, 1000); // Simulating fetch delay of 1 second
    };

    fetchData();
  }, []);

  const bestSellingProducts = products.filter(product => product.attribute === "bestselling").slice(0, 5);
  const exploreProducts = products.filter(product => product).slice(0, 10);

  return (
    <div className='bg-[#F8F8F3] flex flex-col relative'>
      <img
        src={currentBanner === 1 ? "" : currentBanner === 2 ? "" : ""}
        alt={`banner${currentBanner}`}
        className='w-full h-72 mt-20 border border-gray-200'
      />
      <div className='mt-3'>
        <div className='absolute left-0 right-0 flex justify-center gap-2 pb-2'>
          <button
            className={`h-3 w-3 rounded-full ${currentBanner === 1 ? 'bg-black' : 'bg-gray-300'}`}
            onClick={() => setCurrentBanner(1)}
          ></button>
          <button
            className={`h-3 w-3 rounded-full ${currentBanner === 2 ? 'bg-black' : 'bg-gray-300'}`}
            onClick={() => setCurrentBanner(2)}
          ></button>
          <button
            className={`h-3 w-3 rounded-full ${currentBanner === 3 ? 'bg-black' : 'bg-gray-300'}`}
            onClick={() => setCurrentBanner(3)}
          ></button>
        </div>
      </div>

      <div className='p-12 '>
        <div className='flex flex-row justify-end px-10 gap-8'>
          <Link to="/wishlist">
            <div className='flex flex-col items-center w-16 bg-gray-100 hover:bg-gray-200 border border-gray-500 rounded-xl p-2'>
              <AiOutlineHeart className='text-3xl text-red-600'/>
              <h6 className='text-sm font-semibold'>Wishlist</h6>
            </div>
          </Link>
          <Link to="/cart">
            <div className='flex flex-col items-center w-16 bg-gray-100 hover:bg-gray-200 border border-gray-500 rounded-xl p-2'>
              <AiOutlineShoppingCart className='text-3xl text-green-800'/>
              <h6 className='text-sm font-semibold'>Cart</h6>
            </div>
          </Link>
        </div>

        <div className='flex flex-row items-center'>
          <span className='bg-orange-600 w-3 h-6 mr-3'></span>
          <h1 className='text-xl font-semibold text-orange-600 '>This Month</h1>
        </div>

        <div className='py-5 flex flex-row justify-between'>
          <h1 className='text-3xl font-bold text-black '>Best Selling Products</h1>
          <Link to="/allproducts" state={{attribute:"bestselling", products: products}} className="bg-orange-500 hover:bg-orange-600 text-gray-50 hover:text-white rounded-[4px] font-medium px-[34px] py-[8px] shadow-md">
            View All
          </Link>
        </div>

        <div className='p-4 flex flex-row justify-between gap-7'>
          {bestSellingProducts.map((product, index) => (
            <ProductCard key={index} product={product} products={products}/>
          ))}
        </div>
      </div>

      {/* categories */}
      <div className='p-12 '>
        <div className='flex flex-row items-center'>
          <span className='bg-orange-600 w-3 h-6 mr-3'></span>
          <h1 className='text-xl font-semibold text-orange-600 '>Categories</h1>
        </div>
        <h1 className='py-5 text-3xl font-bold text-black '>Browse By Category</h1>
        <div className='p-4 flex flex-row'>
          <Link to="/allproducts" state={{category:"protein", products: products}} className="bg-gray-900 text-gray-50 rounded-[8px] font-medium text-richblack-900 px-[24px] py-[8px] mr-10">
            Protein
          </Link>
          <Link to="/allproducts" state={{category:"preworkout", products: products}} className="bg-gray-900 text-gray-50 rounded-[8px] font-medium text-richblack-900 px-[24px] py-[8px] mr-10">
            Pre-Workout
          </Link>
          <Link to="/allproducts" state={{category:"clothing", products: products}} className="bg-gray-900 text-gray-50 rounded-[8px] font-medium text-richblack-900 px-[24px] py-[8px] mr-10">
            Clothing
          </Link>
          <Link to="/allproducts" state={{category:"equipment", products: products}} className="bg-gray-900 text-gray-50 rounded-[8px] font-medium text-richblack-900 px-[24px] py-[8px] mr-10">
            Equipment
          </Link>
        </div>
      </div>

      <div className='p-12 '>
        <div className='flex flex-row items-center'>
          <span className='bg-orange-600 w-3 h-6 mr-3'></span>
          <h1 className='text-xl font-semibold text-orange-600 '>Our Products</h1>
        </div>
        <h1 className='py-5 text-3xl font-bold text-black '>Explore Our Products</h1>
        <div className='p-4 flex flex-wrap justify-between gap-7'>
          {exploreProducts.map((product, index) => (
            <ProductCard key={index} product={product} products={products}/>
          ))}
        </div>
        <div className="py-5 flex justify-center">
          <Link to="/allproducts" state={{products: products}} className="bg-orange-500 hover:bg-orange-600 text-gray-50 hover:text-white rounded-[4px] font-medium px-[64px] py-[8px] shadow-xl">
            View All Products
          </Link>
        </div>
      </div> 

      <div className='py-20 flex flex-row justify-center gap-20'>
        <div className='flex flex-col items-center'>
          <div className='border-8 border-gray-500 rounded-full'>
            <div className='flex items-center justify-center bg-black  rounded-full w-12 h-12'>
              <AiOutlineTruck className='text-white text-3xl' />
            </div>
          </div>
          <h1 className='mt-3 text-md font-bold'>FREE AND FAST DELIVERY</h1>
          <h6 className=' text-xs font-semibold'>Free delivery for all orders over Rs.200</h6>
        </div>
        <div className='flex flex-col items-center'>
          <div className='border-8 border-gray-500 rounded-full'>
            <div className='flex items-center justify-center bg-black rounded-full w-12 h-12'>
              <AiOutlineCustomerService className='text-white text-3xl' />
            </div>
          </div>
          <h1 className='mt-3 text-md font-bold'>24/7 CUSTOMER SERVICE</h1>
          <h6 className=' text-xs font-semibold'>Friendly 24/7 customer support</h6>
        </div>
        <div className='flex flex-col items-center'>
          <div className='border-8 border-gray-500 rounded-full'>
            <div className='flex items-center justify-center rounded-full w-12 h-12 bg-black  '>
              <AiOutlineSafetyCertificate className='text-white text-3xl' />
            </div>
          </div>
          <h1 className='mt-3 text-md font-bold'>MONEY BACK GUARANTEE</h1>
          <h6 className='text-xs font-semibold'>We return money within 1 week</h6>
        </div>
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

export default Shop;
