import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/LogoOption_NoMargins.svg'

export default function Navbar() {
  return (
    <nav className='w-full h-26.25 bg-white sticky top-0 z-50 flex items-center justify-between font-lato'>

        <Link>
            <img src={Logo} alt="Grand Atlas Logo" className="w-21.25 ml-[40.8px] flex shrink-0" />
        </Link>

        <ul className="flex list-none items-center gap-17.25 text-[20px] font-bold text-dark-30">
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/units'>
                <li>Units</li>
            </Link>
            <Link to='/zones'>
                <li>Zones</li>
            </Link>
            <Link to='/developers'>
                <li>Developers</li>
            </Link>
            <Link to='/contact-us'>
                <li>Contact Us</li>
            </Link>
        </ul>

        <button className='w-27.5 h-8.75 text-white rounded-[5px] bg-linear-to-r from-red-100 to-red-50 mr-9'>
            Register
        </button>
        
    </nav>
  )
}
