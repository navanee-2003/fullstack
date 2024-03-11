import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/images/logo.svg';
const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link to="/user/home">
          <img src={Image} alt="logo" width={128} height={38}/>

        </Link>

        <p> 2024 Evently.All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
