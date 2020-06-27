import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <span className='span'> </span>
      <div className='links'>
        <Link className='link' to='/about'>
          About Us
        </Link>
        <Link className='link' to='/contact'>
          Contact Us
        </Link>
        <Link className='link' to='/faqs'>
          FAQS
        </Link>
      </div>
      <div className='copyright'>
        <Link to='/' className='brand'>
          ClothingApp
        </Link>

        <p className='para'>&copy; 2020 ClothingApp, Inc. </p>
      </div>
    </div>
  );
}

export default Footer;