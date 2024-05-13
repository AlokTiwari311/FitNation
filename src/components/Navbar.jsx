import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolltoY, setscrolltoY] = useState(0)
  const [setScroll, setsetScroll] = useState(true)

  const onScroll=()=>{
      // setscrolltoY(document.documentElement.scrollTop)
      var scrolledUp=window.scrollY || document.documentElement.scrollTop
      setscrolltoY(scrolledUp)
      const scrolled= scrolltoY>=300
      // console.log(new Date().getTime())
      if(scrolled){
        setsetScroll(false)
      }
      else{
        setsetScroll(true)
      }
  }
  
  useEffect(() => {
    const watchScroll=()=>{
      window.addEventListener("scroll", onScroll);

    }
    
    watchScroll()
    return () => {
      console.log("Removed")
      window.removeEventListener("scroll", onScroll)
    };
  });
  
console.log("this is demo",scrolltoY)
console.log(setScroll)

 
  

  return (
    <div className={`fixed  z-50 flex flex-col justify-center items-center  w-[100%] h-[110px] backdrop-blur-lg
    transition-all duration-[1s]  
     ${setScroll ? 'top-[0px]':'top-[-110px]'}`}>
    <nav id="myNav" 
      className={`backdrop-blur-lg   rounded-full py-2 border-2 border-[#FB5607]  transition-all duration-[2s]   mt-4 w-11/12 shadow-md ${setScroll ? '':'w-[60%]'} `}
      
    >
      <div className="flex justify-between items-center max-w-[1160px] mx-auto">
        {/* <h1 className='text-orange-600'>{scrolltoY}</h1> */}
        <Link to="/">
          <img src={logo} alt="Logo" width={120} height={10} loading="lazy" />
        </Link>

        <div className="hidden md:flex items-center gap-x-8">
          <ul className="text-orange-600 flex gap-x-8 text-xl">
            <li className="hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

       

        {isOpen && (
          <div className="md:hidden absolute top-[550px] right-0 w-full bg-[#fb5607] py-4 z-30">
            <ul className="text-white flex flex-col items-center gap-y-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link to="/dashboard">
                    <button className="nav-btn text-white">Dashboard</button>
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login">
                      <button className="nav-btn">Log in</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup">
                      <button className="nav-btn">Sign up</button>
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li>
                  <Link to="/">
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                      }}
                      className="nav-btn"
                    >
                      Log Out
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="md:flex items-center gap-x-4 hidden">
          {!isLoggedIn && (
            <>
              <Link to="/login">
                <button className="nav-btn py-2 px-4 text-white bg-[#fb5607] rounded-md">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="nav-btn text-white bg-[#fb5607] py-2 px-4 rounded-md">
                  Sign up
                </button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/dashboard">
                <button className="nav-btn text-[#fb5607] py-2 px-4 bg-white rounded-md">
                  Dashboard
                </button>
              </Link>
              <Link to="/">
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                  }}
                  className="nav-btn text-[#fb5607] py-2 px-4 bg-white rounded-md"
                >
                  Log Out
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;