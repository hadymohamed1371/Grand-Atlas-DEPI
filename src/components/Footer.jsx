import React from 'react'
import Logo from '../assets/images/LogoOption.svg'
import Arrow from '../assets/icons/arrows-down-top-move-1.svg'
import LinkedIn from '../assets/icons/link_icons/Linkedin.svg'
import Facebook from '../assets/icons/link_icons/facebook.svg'
import Twitter from '../assets/icons/link_icons/Twitter.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='min-h-93.5 h-auto bg-[#FAFAFA] w-full pt-9 pr-45.75 pb-9 pl-43 font-lato text-[16px] mt-36.25 -mb-9'>
        <div>
            <div className='grid grid-cols-4 items-center text-dark'>
                <div>
                    <Link to='/home'><img src={Logo} alt="Logo" className='w-37.75'/></Link>
                    <div className='mb-11.5 ml-2.75'>
                        <p className='-mt-5 mb-5.75'>+20 124 785 9622</p>
                        <p>Grand.Atlas.Support<wbr/>@gmail.com</p>
                    </div>
                </div>

                <div>
                    <p className='mb-3.75 mt-9.75'><strong>Quick Links</strong></p>
                    <div className='flex flex-col gap-3'>
                        <Link to='/home' className='opacity-65 cursor-pointer'>Home</Link>
                        <Link to='/units' className='opacity-65 cursor-pointer'>Inventories</Link>
                        <Link to='/zones' className='opacity-65 cursor-pointer'>Zones</Link>
                        <Link to='/developers' className='opacity-65 cursor-pointer'>Developer</Link>
                        <Link to='/contact-us' className='opacity-65 cursor-pointer'>Contact Us</Link>
                    </div>
                </div>

                <div>
                    <p className='mb-3.75 mt-9.75'><strong>About</strong></p>
                    <div className='flex flex-col gap-3'>
                        <p className='opacity-65 cursor-pointer'>Grand Atlas</p>
                        <p className='opacity-65 cursor-pointer'>Privacy Policy</p>
                        <p className='opacity-65 cursor-pointer'>Legal</p>
                        <p className='opacity-65 cursor-pointer'>Help</p>
                        <p className='opacity-65 cursor-pointer'>Support</p>
                    </div>
                </div>

                <div>
                    <p className='mb-8.5'>Get in touch</p>
                    
                    <form method='POST' className='flex flex-row'>
                        <input type="text" placeholder='Get product updates' className='w-62 h-11.5 border border-red-100 rounded-l-md pt-4 pr-2 pb-4 pl-4' required />
                        <button className='bg-red-100 pt-4 pr-2 pb-4 pl-2 h-11.5 rounded-r-md flex justify-center items-center cursor-pointer'>
                            <img src={Arrow} alt="Arrow" className='w-3.25 mt-4.25 mb-4.25 ml-4.5 mr-[16.75px]' />
                        </button>
                    </form>
                    
                    <div className="flex gap-3.75 mt-5.25 ml-0.5">
                        <a href='https://www.linkedin.com/'><img src={LinkedIn} alt="LinkedIn" className='cursor-pointer' /></a>
                        <a href='https://facebook.com'><img src={Facebook} alt="Facebook" className='cursor-pointer' /></a>
                        <a href='https://x.com'><img src={Twitter} alt="Twitter" className='cursor-pointer' /></a>
                    </div>
                </div>
            </div>

            <div className='w-full h-px mt-4 bg-dark border-px border-dark border-solid opacity-8'></div>
        </div>
        
        <div className='flex items-center justify-center text-dark'>
            <p className='mt-10'>© 2026 <Link to='/home'>Grand Atlas</Link>. All rights reserved</p>
        </div>
    </footer>
  )
}

