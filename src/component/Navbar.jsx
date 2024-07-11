import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import { motion } from "framer-motion";

const variants = {
  open: {
    opacity: 1,
    height: "265px",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};


function Navbar() {

  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  }

  return (
    <>
      <nav className="relative bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-2">
          <RouterLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="w-[178.2px] h-[56.46px]" alt="Logo" />
          </RouterLink>
          <button
            // onClick={toggleNavbar}
            type="button"
            onClick={handleChange}
            className="bg-[#0066FF] inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
          // aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {show ? <svg
              className="w-6 h-6"
              stroke="white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> : <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>}
          </button>
          <motion.div
            variants={variants}
            initial="closed"
            animate={show ? "open" : "closed"}
            className="absolute top-[70px] z-[999] w-full bg-[#0066FF] flex flex-col lg:hidden overflow-hidden">
            <div className='text-[16px] text-white text-center bg-white bg-opacity-15 font-[600]'>
              <div className='p-[10px] '>
                <Link
                  to="home"
                  smooth={true}
                  className='w-full cursor-pointer'
                  onClick={handleChange}
                  duration={600}
                >HOME</Link>
              </div>
            </div>
            <div className='text-[16px] text-white text-center hover:bg-white hover:bg-opacity-15 font-[600]'>
              <div className='p-[10px] '>
                <Link to="about"
                  smooth={true}
                  className='w-full cursor-pointer'
                  onClick={handleChange}
                  duration={600}>ABOUT US</Link>
              </div>
            </div>
            <div className='text-[16px] text-white text-center hover:bg-white hover:bg-opacity-15 font-[600]'>
              <div className='p-[10px] '>
                <Link to="clients"
                  smooth={true}
                  className='w-full cursor-pointer'
                  onClick={handleChange}
                  duration={600}>CLIENTS</Link>
              </div>
            </div>
            <div className='text-[16px] text-white text-center hover:bg-white hover:bg-opacity-15 font-[600]'>
              <div className='p-[10px] '>
                <Link to="patents"
                  className='w-full cursor-pointer'
                  onClick={handleChange}
                  smooth={true}
                  duration={600}>PATENTS</Link>
              </div>
            </div>
            <div className='text-[16px] text-white text-center hover:bg-white hover:bg-opacity-15 font-[600]'>
              <div className='p-[10px]  w-full'>
                <Link to="faq"
                  className='w-full cursor-pointer'
                  onClick={handleChange}
                  smooth={true}
                  duration={600}>FAQ</Link>
              </div>
            </div>
            <div className='text-[16px] text-white text-center hover:bg-white hover:bg-opacity-15 font-[600]'>
              <div className='p-[10px] '>
                <Link to="contact"
                  className='w-full cursor-pointer'
                  onClick={handleChange}
                  smooth={true}
                  duration={600}>CONTACT</Link>
              </div>
            </div>
          </motion.div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className='border-b-[3px] border-[#0066FF] py-2 cursor-pointer'>
                <Link
                  to="home"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer block py-2 px-3 font-bold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-900 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li className='border-b-[3px] border-transparent hover:border-[#0066FF] py-2 cursor-pointer'>
                <Link
                  to="about"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT US
                </Link>
              </li>
              <li className='border-b-[3px] border-transparent hover:border-[#0066FF] py-2 cursor-pointer'>
                <Link
                  to="clients"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  CLIENTS
                </Link>
              </li>
              <li className='border-b-[3px] border-transparent hover:border-[#0066FF] py-2 cursor-pointer'>
                <Link
                  to="patents"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  PATENTS
                </Link>
              </li>
              <li className='border-b-[3px] border-transparent hover:border-[#0066FF] py-2 cursor-pointer'>
                <Link
                  to="faq"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li className='border-b-[3px] border-transparent hover:border-[#0066FF] py-2 cursor-pointer'>
                <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
