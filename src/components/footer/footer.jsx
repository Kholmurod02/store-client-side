import React from 'react'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import insta from '../../assets/instagram.svg'
import inn from '../../assets/in.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='text-white bg-[#000000] flex justify-evenly p-[40px] sm:flex-col sm:gap-10  '>
            <section className='flex flex-col gap-3'>
                <h1 className='font-[550] text-[24px]'>Exclusive</h1>
                <h1 className='font-[350] text-[20px]'>Subscribe</h1>
                <p>Get 10% off your first order</p>
                <div className='flex gap-2 border-[1px] p-[4px] rounded w-[fit-content]'>
                    <input type="text" placeholder='Enter your email' className='bg-black w-[220px]' />
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.91196 12H3.99996L2.02296 4.13505C2.0103 4.08934 2.00259 4.0424 1.99996 3.99505C1.97796 3.27405 2.77196 2.77405 3.45996 3.10405L22 12L3.45996 20.896C2.77996 21.223 1.99596 20.737 1.99996 20.029C2.00198 19.9658 2.0131 19.9031 2.03296 19.843L3.49996 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
            </section>
            <section className='flex flex-col gap-3'>
                <h1 className='font-[550] text-[24px]'>Support</h1>
                <p>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </section>
           <div className='flex gap-20'>
           <section className='flex flex-col gap-3'>
                <h1 className='font-[550] text-[24px]'>Support</h1>
                <Link to="/account">My Account</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/wishes">Wishlist</Link>
                <Link to="/products">Shop</Link>
            </section>
            <section className='flex flex-col gap-3'>
                <h1 className='font-[550] text-[24px]'>Quick Link</h1>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <Link to="/contact">Contact</Link>
            </section>
           </div>
            <section className='flex flex-col gap-3' >
            <h1 className='font-[550] text-[24px]'>Social</h1>
                <div className='flex gap-2'>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
                <a href=""></a>
                <img src={inn} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Footer