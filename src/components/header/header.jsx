import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import NavMenu from '../menu/menu';





const Header = () => {

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  return (
    <div className=' flex justify-between p-[20px] items-center border-b-2'>
      <img src={logo} alt="" className='sm:hidden' />
      <p className='hidden sm:flex items-center gap-2 font-[600] text-[24px]'>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12V10.8615H18V12H0ZM0 6.56926V5.43074H18V6.56926H0ZM0 1.13852V0H18V1.13852H0Z" fill="black" />
      </svg>
      Exclusive
      </p>
      <nav className='flex gap-10 items-center sm:hidden'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/signUp">Sign Up</Link>
      </nav>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2 bg-[#F5F5F5] p-[7px] rounded sm:hidden'>
          <input className='w-[220px] bg-[#F5F5F5] '
            type="text" placeholder='  What are you looking for?' />
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
        </div>
        <Link to="/wishes" className='sm:hidden mr-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </Link>
        <Link to="/cart" className=''>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Link>
        <NavMenu/>
      </div>
    </div>
  )
}

export default Header


