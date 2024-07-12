import React from 'react';
import logo from '../assets/logo.png';
import './CollarCard.css';
import { Link } from 'react-scroll';

function CollarCard() {
  return (
    <div className="collar-card-container">
      <div className="collar-card-img">
        <img src={logo} alt="logo" />
      </div>

      <div className="phone-card">
        <ul>
          <li><i className="fa-solid fa-square-phone"></i></li>
          <li className='li-border'> (310) 472-7600</li>
          <li><i className="fa-solid fa-envelope-open-text"></i>&nbsp; sales@collarcard.com</li>
        </ul>
      </div>

      <ul className="menu-list cursor-pointer">
        <li className='p-2 border-b-[1.6px] border-transparent hover:border-black'>
          <Link to="home" smooth={true} duration={600}>Home</Link>
        </li>
        <li className='p-2 border-b-[1.6px] border-transparent hover:border-black'>
          <Link to="about" smooth={true} duration={600}>About us</Link>
        </li>
        <li className='p-2 border-b-[1.6px] border-transparent hover:border-black'>
          <Link to="clients" smooth={true} duration={600}>Clients</Link>
        </li>
        <li className='p-2 border-b-[1.6px] border-transparent hover:border-black'>
          <Link to="patents" smooth={true} duration={600}>Patents</Link>
        </li>
        <li className='p-2 border-b-[1.6px] border-transparent hover:border-black'>
          <Link to="faq" smooth={true} duration={600}>FAQs</Link>
        </li>
        <li className='p-2 border-b-[1.6px] border-transparent hover:border-black'>
          <Link to="contact" smooth={true} duration={600}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default CollarCard;
