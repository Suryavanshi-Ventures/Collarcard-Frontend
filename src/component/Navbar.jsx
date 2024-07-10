import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
          <RouterLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="w-[178.2px] h-[56.46px]" alt="Logo" />
          </RouterLink>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
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
